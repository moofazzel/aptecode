"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { GradientButton } from "@/components/ui/gradient-button";
import { Project } from "@/types/portfolio";
import { Globe, Monitor, Smartphone, Tablet } from "lucide-react";
import { useState } from "react";

type DeviceType = "mobile" | "tablet" | "desktop";

interface DeviceConfig {
  width: string;
  label: string;
  icon: typeof Monitor;
}

const deviceConfigs: Record<DeviceType, DeviceConfig> = {
  mobile: { width: "375px", label: "Mobile", icon: Smartphone },
  tablet: { width: "768px", label: "Tablet", icon: Tablet },
  desktop: { width: "100%", label: "Desktop", icon: Monitor },
};

export default function QuickViewModal({
  project,
  gradientButton = false,
}: {
  project: Project;
  gradientButton?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState<DeviceType>("desktop");

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <GradientButton
          className="text-sm cursor-pointer"
          variant={gradientButton ? "primary" : "secondary"}
        >
          Quick View
        </GradientButton>
      </DialogTrigger>

      <DialogContent className=" !max-w-[1520px] overflow-y-auto max-h-[90vh] ">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Globe className="h-6 w-6 text-blue-600" />
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Live Site Preview */}
          <div className="space-y-3">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <h3 className="text-lg font-semibold text-gray-900">
                Live Site Preview
              </h3>
              <div className="flex items-center gap-3 text-sm flex-wrap">
                {/* Device Selector */}
                <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
                  {(Object.keys(deviceConfigs) as DeviceType[]).map(
                    (device) => {
                      const config = deviceConfigs[device];
                      const Icon = config.icon;
                      const isActive = selectedDevice === device;

                      return (
                        <button
                          key={device}
                          onClick={() => setSelectedDevice(device)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-all duration-200 ${
                            isActive
                              ? "bg-white text-blue-600 shadow-sm font-medium"
                              : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                          }`}
                          title={`View in ${config.label} mode`}
                        >
                          <Icon className="h-4 w-4" />
                          <span className="text-xs">{config.label}</span>
                        </button>
                      );
                    }
                  )}
                </div>

                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-medium">
                  Live
                </span>
              </div>
            </div>

            <div className="relative border-2 border-gray-200 rounded-lg overflow-hidden shadow-lg bg-gray-50">
              <div className="relative h-[70vh] max-h-[70vh] flex items-center justify-center">
                <div
                  className="h-full bg-white transition-all duration-300 ease-in-out shadow-xl"
                  style={{
                    width: deviceConfigs[selectedDevice].width,
                    maxWidth: "100%",
                  }}
                >
                  <iframe
                    src={project.liveUrl}
                    className="w-full h-full border-0"
                    title={`${project.title} - Live Preview`}
                    sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className=" gap-6">
            {/* Project Info */}
            <div className=" space-y-4">
              <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                {project.impact && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="text-sm text-green-800 font-medium">
                      Impact:
                    </p>
                    <p className="text-sm text-green-700">{project.impact}</p>
                  </div>
                )}
              </div>

              {/* Technologies */}
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
