import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
} from '@/components/ui/card.tsx';
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from '@/components/ui/avatar.tsx';
import { Badge } from '@/components/ui/badge.tsx';
import { OverviewCardStatusDropdown } from '@/domain/pages/overview/components/OverviewCardStatusDropdown.tsx';
import { Checkbox } from '@/components/ui/checkbox.tsx';

export const OverviewCard = () => {
    /*
    * <CardAction>
                    <Button variant="destructive">
                        <Trash /> Delete
                    </Button>
                </CardAction>*/
    return (
        <Card className="group relative w-full">
            <CardContent>
                <div className="flex flex-row items-center-safe">
                    <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity pr-4">
                        <Checkbox />
                    </div>
                    <div className="pr-4">
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="grid w-full pr-4">
                        <CardTitle className="text-lg">
                            Senior Software Engineer
                        </CardTitle>
                        <CardDescription className="text-md">
                            Vercel
                        </CardDescription>
                    </div>
                    <OverviewCardStatusDropdown />
                </div>
            </CardContent>
            <CardFooter className="flex-row items-start gap-2">
                <Badge>100% Remote</Badge>
                <Badge>{Math.floor(Math.random() * 100)}k € / year</Badge>
            </CardFooter>
        </Card>
    );
};
