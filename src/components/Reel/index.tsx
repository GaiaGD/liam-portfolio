import { motion } from "framer-motion";

interface ReelProps {
  title: string;
  videoEmbed: string;
}

export default function Reel({ title, videoEmbed }: ReelProps) {
  if (!videoEmbed) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20"
    >
      <div className="w-full aspect-video">
        <iframe
          className="w-full h-full rounded-lg"
          src={videoEmbed}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </motion.div>
  );
}
