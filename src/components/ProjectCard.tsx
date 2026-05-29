import React from 'react';
import { motion } from 'framer-motion';
import { FaCodeBranch, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  repoLink?: string;
  demoLink?: string;
  status?: string;
  tags?: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  repoLink, 
  demoLink,
  status,
  tags = ['Web3', 'Smart Contract', 'React']
}) => {
  return (
    <div className="bg-gradient-to-br from-neutral-800/60 to-neutral-900/60 border border-neutral-700/30 rounded-xl overflow-hidden h-full flex flex-col transition-all hover:border-teal-400/20">
      <div className="p-6 relative overflow-hidden project-header">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/10 to-blue-500/10 opacity-30"></div>
        <motion.div 
          className="relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-start justify-between gap-3">
            <h4 className="text-xl font-bold mb-1 text-white">{title}</h4>
            {status && (
              <span className="text-xs py-1 px-3 bg-teal-400/10 text-teal-300 border border-teal-400/20 rounded-full whitespace-nowrap">
                {status}
              </span>
            )}
          </div>
          <div className="w-12 h-1 bg-teal-400 rounded mb-4"></div>
        </motion.div>
      </div>
      <div className="p-6 pt-2 flex-grow">
        <p className="text-neutral-300">{description}</p>
      </div>
      <div className="p-6 pt-0 flex gap-4 mt-auto">
        {repoLink && (
          <a 
            href={repoLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-sm text-neutral-400 hover:text-teal-400 transition-colors"
          >
            <FaCodeBranch />
            <span>Repository</span>
          </a>
        )}
        {demoLink && (
          <a 
            href={demoLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-sm text-neutral-400 hover:text-teal-400 transition-colors"
          >
            <FaExternalLinkAlt />
            <span>Live Demo</span>
          </a>
        )}
      </div>

      <div className="px-6 pb-6">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={tag}
              className={`text-xs py-1 px-3 rounded-full ${
                index % 3 === 0
                  ? 'bg-teal-400/10 text-teal-400'
                  : index % 3 === 1
                    ? 'bg-blue-500/10 text-blue-400'
                    : 'bg-purple-500/10 text-purple-400'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
