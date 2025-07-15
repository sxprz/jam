import type { FC } from 'react';
import { OverviewCard } from './components/OverviewCard';

export const OverviewPage: FC = () => {
    return (
        <div className="flex flex-col gap-4">
            <OverviewCard />
            <OverviewCard />
            <OverviewCard />
            <OverviewCard />
            <OverviewCard />
            <OverviewCard />
            <OverviewCard />
            <OverviewCard />
        </div>
    );
};
