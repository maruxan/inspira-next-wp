import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

export default function CoverImage({ title, coverImage, slug }) {
  const image = (
    <Image
      alt={`Imagen de portada para ${title}`}
      src={coverImage?.sourceUrl}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
      priority
      layout="fill"
      objectFit="cover"
    />
  );
  return (
    <div className="sm:mx-0 xl:mx-[var(--container)] h-[30rem] md:h-[40rem] relative">
      {slug ? (
        <Link href={`/posts/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
}
