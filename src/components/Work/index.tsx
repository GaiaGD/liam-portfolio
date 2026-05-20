import { motion } from "framer-motion";

interface WorkItem {
  org: string;
  channelUrl: string;
  videoEmbed: string;
  role: string;
  location: string;
  period: string;
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
          <div className="mb-5">
            <a
              href={item.channelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold tracking-tight hover:opacity-60 transition-opacity"
            >
              {item.org} ↗
            </a>
            <p className="text-sm font-light opacity-50 mt-1">
              {item.role} &nbsp;·&nbsp; {item.location} &nbsp;·&nbsp; {item.period}
            </p>
          </div>
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute inset-0 w-full h-full rounded-lg"
              src={item.videoEmbed}
              title={item.org}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
