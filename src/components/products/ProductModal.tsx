import React from 'react';
import { X, Check, Award, Shield, Zap } from 'lucide-react';

interface Product {
    id: number;
    name: string;
    image: string;
    description: string;
    details: {
        capacity: string;
        speed: string;
        dimensions: string;
        features: string[];
        certifications: string[];
        applications: string[];
        advantages: string[];
    };
}

interface ProductModalProps {
    product: Product;
    onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-8">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X className="h-6 w-6 text-gray-500 hover:text-gray-700" />
                        </button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <div className="relative rounded-2xl overflow-hidden mb-8">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full aspect-4/3 object-cover"
                                />
                            </div>
                            <p className="text-gray-700 text-lg mb-8 leading-relaxed">{product.description}</p>

                            <div className="bg-accent rounded-2xl p-8">
                                <h3 className="text-xl font-semibold mb-6 flex items-center text-white">
                                    <Award className="h-6 w-6 mr-3 text-secondary" />
                                    Avantajlar
                                </h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {product.details.advantages.map((advantage, index) => (
                                        <div key={index} className="flex items-center text-white/90">
                                            <Check className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                                            <span className="text-sm">{advantage}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-gray-50 rounded-2xl p-8">
                                <h3 className="text-xl font-semibold mb-6 flex items-center text-gray-900">
                                    <Zap className="h-6 w-6 mr-3 text-primary" />
                                    Teknik Özellikler
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                                        <span className="font-medium text-gray-700">Kapasite</span>
                                        <span className="text-gray-900">{product.details.capacity}</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                                        <span className="font-medium text-gray-700">Hız</span>
                                        <span className="text-gray-900">{product.details.speed}</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                                        <span className="font-medium text-gray-700">Boyutlar</span>
                                        <span className="text-gray-900">{product.details.dimensions}</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold mb-6 flex items-center text-gray-900">
                                    <Shield className="h-6 w-6 mr-3 text-primary" />
                                    Özellikler
                                </h3>
                                <div className="grid grid-cols-1 gap-3">
                                    {product.details.features.map((feature, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center bg-white border border-gray-100 p-4 rounded-xl hover:border-primary/30 hover:bg-primary/5 transition-colors"
                                        >
                                            <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                                            <span className="text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Kullanım Alanları</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {product.details.applications.map((app, index) => (
                                            <span
                                                key={index}
                                                className="bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-medium"
                                            >
                                                {app}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-4 text-gray-900">Sertifikalar</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {product.details.certifications.map((cert, index) => (
                                            <span
                                                key={index}
                                                className="bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium"
                                            >
                                                {cert}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal; 