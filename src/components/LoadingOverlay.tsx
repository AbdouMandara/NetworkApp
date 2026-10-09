export default function LoadingOverlay() {
    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-white/90 backdrop-blur-sm"
            role="status"
            aria-label="Chargement"
        >
            <span className="loading loading-infinity loading-xl" aria-hidden="true"></span>
        </div>
    );
}