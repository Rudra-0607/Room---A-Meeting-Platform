'use client';
import Loader from '@/components/ui/Loader';
import MeetingRoom from '@/components/ui/MeetingRoom';
import MeetingSetup from '@/components/ui/MeetingSetup';
import { useGetCallById } from '@/hooks/useGetCallById';
import { useUser } from '@clerk/nextjs';
import { StreamCall, StreamTheme } from '@stream-io/video-react-sdk';
import React, { useState } from 'react';

type PageProps = {
  params: {
    id: string;
  };
};

const Page = ({ params: { id } }: PageProps) => {
  const { user, isLoaded } = useUser();
  const [Issetupcomplete, setIssetupcomplete] = useState(false);
  const { Call, IsCallLoading } = useGetCallById(id);

  if (!isLoaded || IsCallLoading) return <Loader />;

  return (
    <main className='h-screen w-full'>
      <StreamCall call={Call}>
        <StreamTheme>
          {!Issetupcomplete ? (
            <MeetingSetup setIssetupcomplete={setIssetupcomplete} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Page;
