import React from 'react'

import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button} from "@nextui-org/react";


const ArticleCard = (props) => {

  const { post } = props;

  return (
    <Card className="">
      <Link href={"/post/" + post.slug.current}><Image className="w-screen h-64 object-cover"
            radius="sm"
            src= {post.mainImage.asset.url}
            alt= {post.mainImage.alt}
          /></Link>
        <CardHeader>
          <div className="flex flex-col w-full gap-4 p-6">
          <Button className="text-small w-1/4 bg-black p-0 m-0 text-white">{post.category}</Button>
            <Link href={"/post/" + post.slug.current}>
              <h2 className="text-xl text-black">{post.title}</h2>
            </Link>
            <p>{post.description}</p>
          </div>
        </CardHeader>
        {/* <Divider/>
        <CardBody className="px-9 py-6">
          <p>{post.date}</p>
        </CardBody> */}
      </Card>
  )
}

export default ArticleCard