import React from "react";

const EmptyRequests = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <div className="text-center">
        <span className="text-6xl mb-4 block">🐾</span>
        <h3 className="text-2xl font-bold mb-2">No Requests Found</h3>
        <p className="text-muted mb-6 max-w-130 mx-auto">
          You haven&apos;t made any adoption requests yet. Start exploring our
          pets and find your new best friend!
        </p>

        {/* Status Badges */}
        <div className="flex justify-center gap-4 mb-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 border border-primary/30 px-4 py-2 text-sm font-semibold text-primary hover:bg-primary/30 transition-colors">
            <span className="text-lg">🐶</span> No Requests
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary/20 border border-secondary/30 px-4 py-2 text-sm font-semibold text-secondary hover:bg-secondary/30 transition-colors">
            <span className="text-lg">😿</span> Empty List
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/30 px-4 py-2 text-sm font-semibold text-accent hover:bg-accent/30 transition-colors">
            <span className="text-lg">🐾</span> No Pets Yet
          </span>
        </div>
      </div>
    </div>
  );
};

export default EmptyRequests;
