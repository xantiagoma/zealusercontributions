import { Fragment } from 'react';
import { parseDomain, fromUrl, ParseResult, ParseResultListed } from 'parse-domain';

type Author = {
	name: string;
	link: string;
};

type CardProps = {
	name: string;
	version: any;
	'icon@2x': string;
	icon: string;
	author: Author;
	urls: Array<string>;
	cheatsheet: boolean;
};

export default function Card({
	name,
	version,
	'icon@2x': icon2x,
	icon: icon1x,
	author,
	urls,
	cheatsheet = false
}: CardProps) {
	const icon = icon2x || icon1x;
	const authorName = author && author.name;
	const authorLink = author && author.link;
	const type = cheatsheet ? 'cheatsheets' : 'docsets';
	const id: string = type + '-' + name;
	const href: string = '#' + id;

	const urls_ = urls.map((url) => {
		const urlData: ParseResult = parseDomain(fromUrl(url)) as ParseResultListed;
		const city = urlData.subDomains[0];
		return (
			<li key={url} className="pl-4">
				<a key={url} href={url} download={true} className="flex hover:text-blue-700 items-center">
					<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
						/>
					</svg>
					{city || 'main'}
				</a>{' '}
			</li>
		);
	});

	return (
		<div className="rounded overflow-hidden border" id={id}>
			<a href={href} className="flex font-bold text-xl border-b p-4 pb-2 hover:text-blue-700">
				<h3 title={name + ' @ ' + version} className="flex">
					{!!icon && (
						<img
							className="object-contain object-top mr-2"
							src={'data:image/png;base64,' + icon}
							alt={name + ' icon'}
							title={name + ' icon'}
						/>
					)}
					<div>
						<p className="truncate">{name}</p>
						<small>version: {version}</small>
					</div>
				</h3>
			</a>
			<div className="p-4 pt-2">
				{author && (
					<p>
						<strong>Author</strong>:{' '}
						<a href={authorLink} className="hover:text-blue-700">
							{authorName}
						</a>
					</p>
				)}
				<strong>Download</strong>
				<ul>{urls_}</ul>
				<strong>Feed URLs</strong>:
				<ul className="flex flex-row mt-2">
					<li>
						<a
							className="flex transition duration-150 bg-gray-200 p-2 mr-2 hover:text-blue-700 rounded-lg hover:bg-gray-300 items-center"
							target="_blank"
							href={`/api/${type}/` + name + '.xml'}
						>
							<svg viewBox="0 0 24 24" className="w-4 h-4">
								<path
									fill="currentColor"
									d="M8.5,18.31L5.69,15.5L12.06,9.12H7.11V5.69H18.31V16.89H14.89V11.94L8.5,18.31Z"
								/>
							</svg>
							XML
						</a>
					</li>
					<li>
						<a
							className="flex bg-gray-200 p-2 hover:text-blue-700 rounded-lg hover:bg-gray-300 items-center"
							target="_blank"
							href={`/api/${type}/` + name + '.json'}
						>
							<svg viewBox="0 0 24 24" className="w-4 h-4">
								<path
									fill="currentColor"
									d="M8.5,18.31L5.69,15.5L12.06,9.12H7.11V5.69H18.31V16.89H14.89V11.94L8.5,18.31Z"
								/>
							</svg>
							JSON
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
