
import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  accent?: string;
}

export default function PageHeader({ title, accent }: PageHeaderProps) {
  return (
    <motion.div 
      className="mb-12"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="section-heading">
        {title}
        {accent && (
          <motion.span 
            className="accent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
          >
            {accent}
          </motion.span>
        )}
      </h1>
    </motion.div>
  );
}
