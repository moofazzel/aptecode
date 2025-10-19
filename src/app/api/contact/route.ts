import { NextRequest, NextResponse } from 'next/server';

interface ContactFormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    const formData: ContactFormData = await request.json();

    // Validate required fields
    if (!formData.email || !formData.phone || !formData.firstname) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Prepare Mailjet API credentials
    const apiKey = process.env.MAILJET_API_KEY;
    const secretKey = process.env.MAILJET_SECRET_KEY;
    const senderEmail = process.env.MAILJET_SENDER_EMAIL;
    const receiverEmail = process.env.MAILJET_RECEIVER_EMAIL || 'support@ivey.solutions';

    if (!apiKey || !secretKey || !senderEmail) {
      console.error('Missing Mailjet credentials');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Create simple HTML email content
    const htmlContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${formData.firstname} ${formData.lastname}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Topic:</strong> ${formData.topic || 'General Inquiry'}</p>
      <p><strong>Message:</strong></p>
      <p>${formData.message}</p>
      <hr>
      <p><small>This email was sent from the Aptecode contact form.</small></p>
    `;

    const textContent = `
      New Contact Form Submission
      
      Name: ${formData.firstname} ${formData.lastname}
      Email: ${formData.email}
      Phone: ${formData.phone}
      Topic: ${formData.topic || 'General Inquiry'}
      Message: ${formData.message}
      
      This email was sent from the Aptecode contact form.
    `;

    // Prepare Mailjet API request
    const mailjetPayload = {
      Messages: [
        {
          From: {
            Email: senderEmail,
            Name: "Aptecode Contact Form"
          },
          To: [
            {
              Email: receiverEmail,
              Name: "Aptecode Support"
            }
          ],
          Subject: `New Contact Form Submission - ${formData.topic || 'General Inquiry'}`,
          HTMLPart: htmlContent,
          TextPart: textContent
        }
      ]
    };

    // Send email via Mailjet API
    const mailjetResponse = await fetch('https://api.mailjet.com/v3.1/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${Buffer.from(`${apiKey}:${secretKey}`).toString('base64')}`
      },
      body: JSON.stringify(mailjetPayload)
    });

    if (!mailjetResponse.ok) {
      const errorText = await mailjetResponse.text();
      console.error('Mailjet API Error:', errorText);
      
      // Provide specific error messages
      if (mailjetResponse.status === 401) {
        throw new Error('Mailjet authentication failed. Please check your API key and secret.');
      } else if (mailjetResponse.status === 400) {
        throw new Error('Invalid email request. Please check the email format and content.');
      } else if (mailjetResponse.status === 403) {
        throw new Error('Mailjet access denied. Please check your account permissions.');
      }
      
      throw new Error(`Mailjet API error: ${mailjetResponse.status}`);
    }

    const result = await mailjetResponse.json();
    console.log('Email sent successfully via Mailjet:', result);

    return NextResponse.json({ 
      message: 'Contact form submitted successfully',
      success: true 
    });

  } catch (error) {
    console.error('Contact form submission error:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to send message. Please try again later.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}