import { motion } from "framer-motion";

interface WorkItem {
  org: string;
  channelUrl: string;
  videoEmbed: string;
  role: string;
  location: string;
  period: string;
  footerLink?: { url: string; label: string };
}

export default function Work({ items }: { items: WorkItem[] }) {
  return (
    <div className="pt-20 pb-24 space-y-20">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            <div className="lg:w-1/3 shrink-0">
              <a
                href={item.channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold tracking-tight hover:opacity-60 transition-opacity"
              >
                {item.org} ↗
              </a>
              <p className="text-sm font-light opacity-50 mt-2">{item.role}</p>
              <p className="text-sm font-light opacity-50">{item.location}</p>
              <p className="text-sm font-light opacity-50">{item.period}</p>
              {item.footerLink && (
                <a
                  href={item.footerLink.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-light opacity-100 hover:opacity-40 transition-opacity mt-3"
                >
                  {item.footerLink.label} ↗
                </a>
              )}
            </div>
            <div className="w-full lg:w-2/3 aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src={item.videoEmbed}
                title={item.org}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
