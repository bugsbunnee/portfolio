"use client";

import React from "react";

import { CameraIcon } from '@radix-ui/react-icons';
import { IconButton } from '@radix-ui/themes';
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface CloudinaryResult {
  public_id: string;
}

interface Props {
    uri: string;
    onUpload: (uri: string) => void;
}

const Upload: React.FC<Props> = ({ onUpload, uri }) => {
  return (
        <>
            {uri && (
                <CldImage
                    src={uri}
                    width={270}
                    height={180}
                    alt="A coffee image"
                />
            )}

            <CldUploadWidget
                uploadPreset='dvqbyseti'
                // uploadPreset={process.env.NEXT_PUBLIC_UPLOAD_PRESET}
                options={{ sources: ["local"], multiple: false, maxFiles: 5 }}
                onQueuesEnd={(result, { widget }) => widget.close()}
                onSuccess={(result, widget) => {
                    if (result.event !== "success") return;
                    
                    const info = result.info as CloudinaryResult;
                    onUpload(info.public_id);
                }}
                onError={console.log}
            >
                {({ open }) => (
                    <IconButton onClick={() => open()} size='4' color='gray' variant='soft'>
                        <CameraIcon width='25' height='25' />
                    </IconButton>
                )}
            </CldUploadWidget>
        </>
  );
};

export default Upload;
