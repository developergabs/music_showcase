import ProductGrid from "@/components/product-grid"

export default function ProductsPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Todos os Produtos</h1>
        <p className="mt-2 text-muted-foreground">
          Explore nossa coleção completa de instrumentos e equipamentos musicais
        </p>
      </div>

      <ProductGrid />
    </div>
  )
}
