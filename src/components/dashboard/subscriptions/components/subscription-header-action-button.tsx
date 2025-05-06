'use client';

import { Confirmation } from '@/components/shared/confirmation/confirmation';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useState } from 'react';

interface Props {
  subscriptionId: string;
}

export function SubscriptionHeaderActionButton({ subscriptionId }: Props) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button
        disabled={loading}
        onClick={() => setModalOpen(true)}
        size={'sm'}
        variant={'outline'}
        className={'flex gap-2 text-sm rounded-sm border-border'}
      >
        Cancel subscription
      </Button>
      <Confirmation
        description={'This subscription will be scheduled to cancel at the end of the billing period.'}
        title={'Cancel subscription?'}
        onClose={() => setModalOpen(false)}
        isOpen={isModalOpen}
        onConfirm={() => {}}
      />
    </>
  );
}
