export function getInitials(name: string): string {
    if (!name) return '';

    const parts = name.trim().split(/\s+/); // splits by spaces
    const first = parts[0]?.[0] || '';
    const last = parts.length > 1 ? parts[parts.length - 1][0] : '';

    return (first + last).toUpperCase();
}
