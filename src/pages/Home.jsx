import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/configure";
import { Container, PostCard } from "../components";
import { Link } from "react-router-dom";
function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  
    return (
      <div className="w-full py-8 mt-4 text-center bg-white">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-7xl my-5">Effortless Publishing</h1>
              <div className="px-4 my-4 text-2xl text-black-600">
                <p>
                  Where ideas spark, stories inspire, and curiosity thrives.
                </p>
                <p>Discover, learn, and grow with every post!</p>
              </div>
              <div className="pt-3 pb-11">
                <Link
                  href="#"
                  class="inline-flex items-center bg-black text-white py-3  px-8 rounded-full hover:bg-gray-800 h-12 text-2xl "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      d="M8 10h8M8 14h6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h10a2 2 0 012 2v10z"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Start a blog
                </Link>
              </div>
              <div>
                <div className="flex gap-4">
                  <div className="overflow-hidden flex flex-col border border-[#dfe0e0] rounded-lg">
                    <Link href="#" className="relative overflow-hidden h-40">
                      <img
                        src="https://images.unsplash.com/photo-1478144592103-25e218a04891?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbSUyMGhlYWx0aHklMjA2MDAlMjA0MDB8ZW58MHx8MHx8fDA%3D"
                        alt="card1 image"
                        className="object-cover object-center absolute h-full w-full"
                        loading="lazy"
                      />
                    </Link>
                    <div className="flex flex-col p-6">
                      <Link href="#" className="text-[#4343bf]">
                        <h2 className="text-base font-semibold text-[#191717] leading-6 mb-1.5">
                          Healthy Eating Tips
                        </h2>
                      </Link>
                      <p className="text-base text-[#716b6b]">
                        Discover simple tips for maintaining a healthy diet and
                        making a nutritious food choices
                      </p>
                    </div>
                    <div className="flex justify-between items-end px-5 pb-5">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 overflow-hidden border border-[#dfe0e0] rounded-full bg-[#f3efef]">
                          <img
                            src="https://api.dicebear.com/7.x/notionists/svg?seed=John?size=64"
                            alt="avatar1"
                            loading="lazy"
                            className="flex items-center gap-4"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[#262695]">
                            John Doe
                          </span>
                          <span className="text-[#887e7e]">Jun 30, 2024</span>
                        </div>
                      </div>
                      <div className="border border-[#4c4747] rounded-sm text-lg leading-[1.3rem] px-2 py-1">
                        <span>Nutrition</span>
                      </div>
                    </div>
                  </div>
                  <div className="overflow-hidden flex flex-col border border-[#dfe0e0] rounded-lg">
                    <Link href="#" className="relative overflow-hidden h-40">
                      <img
                        src="https://images.unsplash.com/photo-1478144592103-25e218a04891?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbSUyMGhlYWx0aHklMjA2MDAlMjA0MDB8ZW58MHx8MHx8fDA%3D"
                        alt="card1 image"
                        className="object-cover object-center absolute h-full w-full"
                        loading="lazy"
                      />
                    </Link>
                    <div className="flex flex-col p-6">
                      <Link href="#" className="text-[#4343bf]">
                        <h2 className="text-base font-semibold text-[#191717] leading-6 mb-1.5">
                          Healthy Eating Tips
                        </h2>
                      </Link>
                      <p className="text-base text-[#716b6b]">
                        Discover simple tips for maintaining a healthy diet and
                        making a nutritious food choices
                      </p>
                    </div>
                    <div className="flex justify-between items-end px-5 pb-5">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 overflow-hidden border border-[#dfe0e0] rounded-full bg-[#f3efef]">
                          <img
                            src="https://api.dicebear.com/7.x/notionists/svg?seed=John?size=64"
                            alt="avatar1"
                            loading="lazy"
                            className="flex items-center gap-4"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[#262695]">
                            John Doe
                          </span>
                          <span className="text-[#887e7e]">Jun 30, 2024</span>
                        </div>
                      </div>
                      <div className="border border-[#4c4747] rounded-sm text-lg leading-[1.3rem] px-2 py-1">
                        <span>Nutrition</span>
                      </div>
                    </div>
                  </div>
                  <div className="overflow-hidden flex flex-col border border-[#dfe0e0] rounded-lg">
                    <Link href="#" className="relative overflow-hidden h-40">
                      <img
                        src="https://images.unsplash.com/photo-1478144592103-25e218a04891?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJhbmRvbSUyMGhlYWx0aHklMjA2MDAlMjA0MDB8ZW58MHx8MHx8fDA%3D"
                        alt="card1 image"
                        className="object-cover object-center absolute h-full w-full"
                        loading="lazy"
                      />
                    </Link>
                    <div className="flex flex-col p-6">
                      <Link href="#" className="text-[#4343bf]">
                        <h2 className="text-base font-semibold text-[#191717] leading-6 mb-1.5">
                          Healthy Eating Tips
                        </h2>
                      </Link>
                      <p className="text-base text-[#716b6b]">
                        Discover simple tips for maintaining a healthy diet and
                        making a nutritious food choices
                      </p>
                    </div>
                    <div className="flex justify-between items-end px-5 pb-5">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 overflow-hidden border border-[#dfe0e0] rounded-full bg-[#f3efef]">
                          <img
                            src="https://api.dicebear.com/7.x/notionists/svg?seed=John?size=64"
                            alt="avatar1"
                            loading="lazy"
                            className="flex items-center gap-4"
                          />
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[#262695]">
                            John Doe
                          </span>
                          <span className="text-[#887e7e]">Jun 30, 2024</span>
                        </div>
                      </div>
                      <div className="border border-[#4c4747] rounded-sm text-lg leading-[1.3rem] px-2 py-1">
                        <span>Nutrition</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-12 text-4xl">
                <p>Making publishing effortless for everyone</p>
              </div>
              
            </div>
          </div>
        </Container>
      </div>
    );
  
  
}

export default Home;
