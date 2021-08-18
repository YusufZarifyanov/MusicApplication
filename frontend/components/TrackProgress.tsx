import React from 'react';

interface TrackProgressProps {
    left: number;
    right: number;
    onChange: (e) => void;
    time: boolean;
}

const TrackProgress: React.FC<TrackProgressProps> = ({ left, right, onChange, time }) => {
    return (
        <div>
            <input type='range' min={0} max={right} value={left} onChange={onChange} />
            <div style={{ display: 'flex' }}>{time ? `${Math.floor(left / 60)}:${left % 60}` : `${left}/${right}`}</div>
        </div>
    );
};

export default TrackProgress;
