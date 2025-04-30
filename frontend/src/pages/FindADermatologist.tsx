import React, { useState } from "react";
import { MapPin, Search } from "lucide-react";

export default function FindDermatologist() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<{ resource: { name?: { given?: string[]; family?: string }[]; address?: { line?: string[]; city?: string; state?: string; postalCode?: string }[] } }[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        if (!query.trim()) return;

        setLoading(true);
        setError('');
        setResults([]);

        const headers = {
            Accept: 'application/fhir+json',
        };

        try {
            const response = await fetch(
                `http://localhost:5000/api/practitioner?name=${encodeURIComponent(query)}`,
                { headers }
            );

            console.log('Response:', response); // Debugging

            if (!response.ok) {
                throw new Error('Failed to fetch data.');
            }

            const data = await response.json();
            console.log('Data from Backend:', data); // Debugging

            if (data.entry) {
                setResults(data.entry);
            } else {
                setResults([]);
                setError('No dermatologists found.');
            }
        } catch (err) {
            console.error('Error:', err);
            setError((err as Error).message || 'Something went wrong.');
        } finally {
            setLoading(false);
        }
    };

  
    return (
        <div className="min-h-screen bg-burgundy-300">
            <main className="container mx-auto px-4 py-12 max-w-4xl">
                {/* Find a Dermatologist Section */}
                <section className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-burgundy-900 mb-4">Find a Dermatologist</h1>
                    <p className="text-black text-lg mb-8">
                        Find a qualified dermatologist for professional skin examination and treatment.
                    </p>

                    <div className="max-w-md mx-auto mb-12">

                        {/* Input Field and Search Button */}
                        <div className="flex items-center border border-black rounded-md overflow-hidden">
                            <div className="bg-burgundy-300 p-3">
                                <MapPin className="h-5 w-5 text-black bg-burgundy-300" />
                            </div>
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search for a dermatologist by name"
                                className="w-full outline-none p-2"
                            />
                            <button
                                onClick={handleSearch}
                                className="rounded-md bg-burgundy-700 hover:bg-burgundy-800 text-white p-3 flex items-center justify-center transition-colors"
                            >
                                <Search className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    {/* Loading and Error Messages */}
                    {loading && <p className="text-gray-600">Loading...</p>}
                    {error && <p className="text-red-500">{error}</p>}

                    {/* Results Section */}
                    {results.length > 0 ? (
                        <div className="mt-6 text-left">
                            <h3 className="text-xl font-semibold mb-3 text-purple-700">Dermatologists found:</h3>
                            <ul className="space-y-4">
                                {results.map((entry, index) => {
                                    const practitioner = entry.resource;
                                    const name = practitioner.name?.[0];
                                    const fullName = name
                                        ? `${name.given?.join(' ')} ${name.family}`
                                        : 'Name not available';
                                    const address = practitioner.address?.[0];
                                    const fullAddress = address
                                        ? `${address.line?.join(', ')}, ${address.city}, ${address.state} ${address.postalCode}`
                                        : 'Address not available';

                                    return (
                                        <li key={index} className="border rounded-lg p-4 bg-[#F5F5F5] shadow-sm">
                                            <p className="font-bold">{fullName}</p>
                                            <p>{fullAddress}</p>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ) : (
                        !loading && <p className="text-gray-600">No results found.</p>
                    )}
                </section>

                {/* Why See a Dermatologist */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-burgundy-900 mb-6">Why See a Dermatologist?</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        Dermatologists are medical doctors who specialize in diagnosing and treating skin, hair, and nail
                        conditions. Regular visits to a dermatologist are important for:
                    </p>
                    <ul className="space-y-2 list-disc list-inside text-gray-700 ml-4">
                        <li>Professional skin cancer screenings</li>
                        <li>Diagnosis and treatment of skin conditions</li>
                        <li>Personalized skin care advice</li>
                        <li>Management of chronic skin conditions</li>
                        <li>Early detection of potential skin problems</li>
                    </ul>
                </section>

                {/* What to Expect */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-burgundy-900 mb-6">What to Expect During Your Visit</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        During your first visit to a dermatologist, you can expect:
                    </p>
                    <ul className="space-y-2 list-disc list-inside text-gray-700 ml-4">
                        <li>A review of your medical history and any skin concerns</li>
                        <li>A thorough examination of your skin, hair, and nails</li>
                        <li>Discussion of any findings and potential diagnoses</li>
                        <li>Treatment recommendations and follow-up plans</li>
                        <li>Opportunity to ask questions about your skin health</li>
                    </ul>
                </section>

                {/* Preparing for Your Appointment */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-burgundy-900 mb-6">Preparing for Your Appointment</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">To make the most of your dermatologist visit:</p>
                    <ul className="space-y-2 list-disc list-inside text-gray-700 ml-4">
                        <li>Make a list of your skin concerns and questions</li>
                        <li>Bring a list of all medications and supplements you're taking</li>
                        <li>Remove nail polish if you have concerns about your nails</li>
                        <li>Consider taking photos of temporary skin issues that may not be present during your appointment</li>
                        <li>Be prepared to discuss your family history of skin conditions</li>
                    </ul>
                </section>

                {/* Disclaimer Section */}
                <section className="mb-8">
                    <div className="border-t border-gray-200 pt-6">
                        <p className="text-gray-600 text-sm">
                            <span className="font-semibold">Note:</span> DermaDetect provides this search tool as a convenience and
                            does not endorse any specific healthcare providers. Always verify a provider's credentials and check with
                            your insurance company regarding coverage.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
