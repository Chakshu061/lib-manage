"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { formatCurrencyString, useShoppingCart } from "use-shopping-cart"

import { SanityProduct } from "@/config/inventory"

import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

interface Props {
  product: SanityProduct
}

export function ProductInfo({ product }: Props) {
  const { toast } = useToast()
  const { addItem, cartDetails, incrementItem } = useShoppingCart()
  const isInCart = !!cartDetails?.[product._id]
  function addToCart() {
    const item = {
      ...product
    }
    isInCart ?  incrementItem(item._id) : addItem(item)
    toast({
      title: `${item.name}`,
      description: "Book added to cart",
      action: (
        <Link href="/cart">
          <Button variant="link" className="gap-x-2 whitespace-nowrap">
            <span>Open cart</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
        </Link>
      )
    })
  }

  return (
    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
      <h1 className="text-3xl font-bold tracking-tight">{product.name}</h1>

      <div className="mt-3">
        <h2 className="sr-only">Product information</h2>
        <p className="text-3xl tracking-tight">₹{product.price}</p>
      </div>

      <div className="mt-3">
        <h2 className="sr-only">Available</h2>
        <p
          className={`text-2xl tracking-tight ${
            product.availability === "In Stock"
              ? "text-green-500" // Green color for In Stock
              : "text-red-500"   // Red color for Out of Stock
          }`}
        >
          {product.availability}
        </p>
      </div>

      <div className="mt-6">
        <h3 className="sr-only">Description</h3>
        <div className="space-y-6 text-base">{product.description}</div>
      </div>

      {/*<div className="mt-4">
        <p>
          Size: <strong></strong>
        </p>
        {[].map((size) => (
          <Button key={size} variant="default" className="mr-2 mt-4">
            Size
          </Button>
        ))}
        </div>*/}

      <form className="mt-6">
        <div className="mt-4 flex">
          <Button onClick={addToCart}
            type="button"
            className="w-full bg-violet-600 py-6 text-base font-medium text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            Rent
          </Button>
        </div>
      </form>
    </div>
  )
}
