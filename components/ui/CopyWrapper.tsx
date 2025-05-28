'use client'

import CopyButton from "../../app/vault/components/CopyButton";

const CopyWrapper = ({ content }: { content: string }) => {
  return (
    <CopyButton content={content} />
  )
};

export default CopyWrapper;
