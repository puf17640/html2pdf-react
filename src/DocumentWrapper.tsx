import React, { RefObject, useState } from 'react';
import html2pdf from 'html2pdf.js';

interface DocumentWrapperProps {
  children: React.ReactNode;
  wrapperRef: RefObject<HTMLDivElement>;
}

function DocumentWrapper({
  children,
  wrapperRef,
}: DocumentWrapperProps): JSX.Element {
  return <div ref={wrapperRef}>{children}</div>;
}

function useHtmlToPdf(
  ref: RefObject<HTMLDivElement>,
  opt: unknown
): [ArrayBuffer, () => void] {
  let [bufferData, setBufferData] = useState(new ArrayBuffer(0));
  const update = async () => {
    const pdfBuffer = await html2pdf()
      .set(opt)
      .from(ref.current)
      .outputPdf('arraybuffer');
    setBufferData(pdfBuffer);
  };
  return [bufferData, update];
}

export { DocumentWrapper, DocumentWrapperProps, useHtmlToPdf };
