"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LinkedInIcon } from "@/components/ui/SocialIcons";
import type { TeamMember } from "@/lib/team";

interface Props {
  members: TeamMember[];
  columns?: 2 | 4;
}

export default function TeamGrid({ members, columns = 4 }: Props) {
  const colClass = columns === 4
    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
    : "grid-cols-1 sm:grid-cols-2";

  return (
    <div className={`grid ${colClass} gap-x-6 gap-y-8`}>
      {members.map((member, i) => (
        <motion.article
          key={member.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: i * 0.06, duration: 0.5 }}
          className="group flex gap-4 items-start"
        >
          <div className="team-avatar shrink-0">
            <Image
              src={member.image}
              alt={member.name}
              width={96}
              height={96}
              className="team-avatar-img"
              sizes="72px"
            />
          </div>

          <div className="min-w-0 flex-1 pt-1">
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="text-title !mb-0 leading-snug">{member.name}</h3>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                className="team-linkedin shrink-0 pt-0.5"
                aria-label={`${member.name} on LinkedIn`}
              >
                <LinkedInIcon size={15} />
              </a>
            </div>
            <p className="team-role">{member.role}</p>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
