import { useActiveProfile } from '@lens-protocol/react';

function ActiveProfileHandle() {
    const { data, error, loading } = useActiveProfile();

    if (loading) return <p>Loading...</p>

    if (error) return <p>{error.message}</p>

    if (data === null) return <p>No active profile selected</p>

    return <p>@{data.handle}</p>
}

export default ActiveProfileHandle;