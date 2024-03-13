import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";

import {client} from "../../sanity.js"

import { PortableText } from '@portabletext/react';
import imageUrlBuilder from '@sanity/image-url';

import Header from '../Header.jsx';
import Footer from '../Footer.jsx';

const builder = imageUrlBuilder(client)

const ArticleBody = () => {


  const [content, setContent] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `*[slug.current == "${slug}"][0]{
          title,
          slug,
          description,
          body,
          "category": categories[0]->title,
          mainImage{
            asset->{
              _id,
              url
            },
            alt
          }
        }`;
        const data = await client.fetch(query);
        setContent(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [slug]);

  const portableComponents = {
    block: {
      h1: ({ children }) => <h1 className="text-6xl font-bold mt-4 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-4xl font-roman mt-4 mb-3 leading-relaxed">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-semibold mt-6 mb-2">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-semibold mt-4 mb-2">{children}</h4>,
    normal: ({ children }) => <p className="mb-4">{children}</p>,
    blockquote: ({ children }) => <blockquote className="bg-gray-100 p-4 italic mb-4">{children}</blockquote>,
    image: ({value}) => <img src={imageUrl} alt={value.alt || ''} loading="lazy" className="mb-4" />,

  },
    marks: {
      link: ({ value, children }) => {
        const target = value.href.startsWith('http') ? '_blank' : undefined;
        return (
          <a
            href={value.href}
            target={target}
            rel={target === '_blank' && 'noopener noreferrer'}
            className="text-blue-600 underline"
          >
            {children}
          </a>
        );
      },
    },
    types: {
      image: ({ value }) => {
        const imageUrl = builder.image(value.asset._ref).url();
        return (<img className="rounded-md my-8" src={imageUrl} />)
      }
    },
    list: {
      bullet: ({ children }) => <ul className="list-disc list-inside ml-4 mb-4">{children}</ul>,
      number: ({ children }) => <ol className="list-decimal list-inside ml-4 mb-4">{children}</ol>,
    },
    listItem: {
      bullet: ({ children }) => <li className="mb-2">{children}</li>,
      number: ({ children }) => <li className="mb-2">{children}</li>,
    },
  };

  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header />
      {content && (
        <>
          <main className="flex-grow px-32 py-16 bg-gray-200">
            <article className="mx-auto bg-white rounded-lg shadow-lg w-full">
              <header className="relative">
                <div className="absolute h-full w-full flex items-center justify-center">
                  <div className="bg-black bg-opacity-20 rounded h-full w-full flex flex-col place-content-center p-24">
                    <h1 className="text-3xl text-white text-left font-bold tracking-tighter lg:text-6xl py-12 px-24 mb-4">
                      {content.title}
                    </h1>
                    {/* ... */}
                  </div>
                </div>
                <img
                  src={content.mainImage.asset.url}
                  alt={content.title}
                  className="w-full object-cover object-center rounded-t"
                  style={{ height: "50vh", minWidth:"80vw" }}
                />
              </header>
              <div className="px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl">
                <PortableText value={content.body} components={portableComponents} />
              </div>
            </article>
          </main>
        </>
      )}
      <Footer />
    </div>
  );
  
}

export default ArticleBody