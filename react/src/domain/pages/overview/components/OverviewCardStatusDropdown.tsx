import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu.tsx';
import { Button } from '@/components/ui/button.tsx';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export const OverviewCardStatusDropdown = () => {
    const [open, setOpen] = useState(false);
    const [status, setStatus] = useState('Seen');

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">
                    {status}
                    {!open ? <ChevronDown /> : <ChevronUp />}
                    <span className="sr-only">Change status</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setStatus('Seen')}>
                    Seen
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatus('Applied')}>
                    Applied
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatus('Rejected')}>
                    Rejected
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatus('Expired')}>
                    Expired
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatus('Offer')}>
                    Offer
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
