interface PrivacyNoticeProps {
  title: string;
  body: string;
}

export default function PrivacyNotice({ title, body }: PrivacyNoticeProps) {
  return (
    <div className="rounded-2xl border border-border bg-surface px-6 py-5">
      <p className="text-sm font-medium uppercase tracking-wide text-accent">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
    </div>
  );
}
