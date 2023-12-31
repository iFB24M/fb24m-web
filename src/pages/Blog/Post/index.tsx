import styles from './index.module.scss';
import React from 'react';
import { Title2, Link, Card } from '@fb24m/ui/components';

interface PostProps {
	slug: string
	title: string
	excerpt: string
	image: string
}

export const Post = (props: PostProps): React.ReactElement => {
	return (
		<Card className={styles.card}>
			<Link href={`/blog/${props.slug}`} className={styles.link}><>
				<Title2>{props.title}</Title2>
				<div dangerouslySetInnerHTML={{ __html: props.excerpt }} />
			</></Link>
		</Card>
	);
};