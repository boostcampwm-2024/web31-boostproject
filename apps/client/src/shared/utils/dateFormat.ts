export const formatRelativeOrAbsoluteDate = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();
  const rtf = new Intl.RelativeTimeFormat('ko', { numeric: 'auto' });
  const diffMinutes = Math.floor((date.getTime() - now.getTime()) / (1000 * 60));
  const diffHours = Math.floor(diffMinutes / 60);
  if (diffMinutes > -60) {
    return rtf.format(diffMinutes, 'minute');
  }

  if (diffHours > -24) {
    return rtf.format(diffHours, 'hour');
  }
  return new Intl.DateTimeFormat('ko', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
};
