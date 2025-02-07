import Image from "next/image"

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-[#0F1117]">
      <div className="max-w-[1200px] mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-16">
          <div className="text-white text-2xl font-semibold"></div>
          <div className="flex items-center gap-2">
            <span className="text-white">Courses</span>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(837)-wpgnnEUs8YRmY0k8m3KLOegZ54EAw3.png"
              alt="Profile"
              width={32}
              height={32}
              className="rounded-full"
            />
          </div>
        </div>

        {/* Courses Section */}
        <div className="text-center mb-16">
          <h1 className="text-white text-5xl font-bold mb-4">Courses</h1>
          <p className="text-gray-400">Checkout our free & paid courses below!</p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Course 1 */}
          <div className="bg-[#1C1F26] rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(837)-wpgnnEUs8YRmY0k8m3KLOegZ54EAw3.png"
              alt="How To Build Reusable Components"
              width={300}
              height={169}
              className="w-full"
            />
            <div className="p-4">
              <h3 className="text-white font-semibold mb-2">How To Build Reusable Components</h3>
              <p className="text-gray-400 text-sm mb-4">Code reusable components to save time & effort!</p>
              <div className="flex items-center text-gray-400 text-sm mb-4">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                1 Chapter
              </div>
              <span className="inline-block bg-[#6366F1] text-white px-3 py-1 rounded-md text-sm">Free</span>
            </div>
          </div>

          {/* Course 2 */}
          <div className="bg-[#1C1F26] rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(837)-wpgnnEUs8YRmY0k8m3KLOegZ54EAw3.png"
              alt="Code Your Own CLI"
              width={300}
              height={169}
              className="w-full"
            />
            <div className="p-4">
              <h3 className="text-white font-semibold mb-2">Code Your Own CLI</h3>
              <p className="text-gray-400 text-sm mb-4">Build & deploy your own Command Line Interface</p>
              <div className="flex items-center text-gray-400 text-sm mb-4">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                1 Chapter
              </div>
              <span className="inline-block bg-[#6366F1] text-white px-3 py-1 rounded-md text-sm">Free</span>
            </div>
          </div>

          {/* Course 3 */}
          <div className="bg-[#1C1F26] rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(837)-wpgnnEUs8YRmY0k8m3KLOegZ54EAw3.png"
              alt="Magic Link & Next Auth Tutorial"
              width={300}
              height={169}
              className="w-full"
            />
            <div className="p-4">
              <h3 className="text-white font-semibold mb-2">Magic Link & Next Auth Tutorial</h3>
              <p className="text-gray-400 text-sm mb-4">Build an authentication system using Next Auth & Magic Link</p>
              <div className="flex items-center text-gray-400 text-sm mb-4">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                10 Chapters
              </div>
              <span className="inline-block bg-[#6366F1] text-white px-3 py-1 rounded-md text-sm">Free</span>
            </div>
          </div>

          {/* Course 4 */}
          <div className="bg-[#1C1F26] rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(837)-wpgnnEUs8YRmY0k8m3KLOegZ54EAw3.png"
              alt="Full Stack Analytics Dashboard"
              width={300}
              height={169}
              className="w-full"
            />
            <div className="p-4">
              <h3 className="text-white font-semibold mb-2">Full Stack Analytics Dashboard</h3>
              <p className="text-gray-400 text-sm mb-4">
                Build a full stack analytics dashboard that displays user data!
              </p>
              <div className="flex items-center text-gray-400 text-sm mb-4">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                12 Chapters
              </div>
              <span className="inline-block bg-[#6366F1] text-white px-3 py-1 rounded-md text-sm">Free</span>
            </div>
          </div>

          {/* Course 5 */}
          <div className="bg-[#1C1F26] rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(837)-wpgnnEUs8YRmY0k8m3KLOegZ54EAw3.png"
              alt="Functional Backend & Database"
              width={300}
              height={169}
              className="w-full"
            />
            <div className="p-4">
              <h3 className="text-white font-semibold mb-2">Functional Backend & Database</h3>
              <p className="text-gray-400 text-sm mb-4">
                Build a working backend that connects to the frontend & stores data!
              </p>
              <div className="flex items-center text-gray-400 text-sm mb-4">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                10 Chapters
              </div>
              <span className="inline-block bg-[#6366F1] text-white px-3 py-1 rounded-md text-sm">Free</span>
            </div>
          </div>

          {/* Course 6 */}
          <div className="bg-[#1C1F26] rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(837)-wpgnnEUs8YRmY0k8m3KLOegZ54EAw3.png"
              alt="Frontend Analytics Dashboard"
              width={300}
              height={169}
              className="w-full"
            />
            <div className="p-4">
              <h3 className="text-white font-semibold mb-2">Frontend Analytics Dashboard</h3>
              <p className="text-gray-400 text-sm mb-4">Build an analytics dashboard using modern tools!</p>
              <div className="flex items-center text-gray-400 text-sm mb-4">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                6 Chapters
              </div>
              <span className="inline-block bg-[#6366F1] text-white px-3 py-1 rounded-md text-sm">Free</span>
            </div>
          </div>

          {/* Course 7 */}
          <div className="bg-[#1C1F26] rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(837)-wpgnnEUs8YRmY0k8m3KLOegZ54EAw3.png"
              alt="Stripe Payment"
              width={300}
              height={169}
              className="w-full"
            />
            <div className="p-4">
              <h3 className="text-white font-semibold mb-2">Stripe Payment</h3>
              <p className="text-gray-400 text-sm mb-4">Build a payment system for your application using Stripe JS!</p>
              <div className="flex items-center text-gray-400 text-sm mb-4">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
                9 Chapters
              </div>
              <span className="inline-block bg-[#6366F1] text-white px-3 py-1 rounded-md text-sm">Free</span>
            </div>
          </div>

          {/* Course 8 */}
          <div className="bg-[#1C1F26] rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(837)-wpgnnEUs8YRmY0k8m3KLOegZ54EAw3.png"
              alt="Next.js Landing Page"
              width={300}
              height={169}
              className="w-full"
            />
            <div className="p-4">
              <h3 className="text-white font-semibold mb-2">Next.js Landing Page</h3>
              <p className="text-gray-400 text-sm mb-4">
                Learn the frontend skills of Next.js by building a simple landing page
              </p>
              <div className="flex items-center text-gray-400 text-sm mb-4">
                <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253"
                  />
                </svg>
                11 Chapters
              </div>
              <span className="inline-block bg-[#6366F1] text-white px-3 py-1 rounded-md text-sm">Free</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

