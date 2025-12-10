import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import FastAPIPage from "./pages/FastAPIPage";
import PythonDataPage from "./pages/PythonDataPage";
import ImpressumPage from "./pages/ImpressumPage";
import DatenschutzPage from "./pages/DatenschutzPage";
import HaftungPage from "./pages/HaftungPage";
import AGBPage from "./pages/AGBPage";
import NewsletterPage from "./pages/NewsletterPage";
import BlogPage from "./pages/BlogPage";
import BlogPostPage from "./pages/BlogPostPage";
import FreePackPage from "./pages/FreePackPage";
import SocialTemplatesPage from "./pages/SocialTemplatesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fastapi" element={<FastAPIPage />} />
          <Route path="/python-data" element={<PythonDataPage />} />
          <Route path="/newsletter" element={<NewsletterPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/free-pack" element={<FreePackPage />} />
          <Route path="/resources/social-templates" element={<SocialTemplatesPage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/datenschutz" element={<DatenschutzPage />} />
          <Route path="/haftung" element={<HaftungPage />} />
          <Route path="/agb" element={<AGBPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
