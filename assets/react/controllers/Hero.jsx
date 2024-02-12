import React from 'react';
import homepageimage from '../../images/homepageimage.jpeg';
import { Tab } from '@headlessui/react'

export default function HeroSection() {
    return (
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-black">Demandez votre traduction de permis de conduire pour le Japon <br />en 5 minutes.</h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Confiez votre démarche à notre équipe bilingue. Et découvrez le Japon en voiture.</p>
                <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                    <a href="https://github.com/themesberg/landwind" className="inline-flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                        Commencer votre démarche
                    </a> 
                    {/* <a href="https://www.figma.com/community/file/1125744163617429490" className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        <svg className="w-4 h-4 mr-2" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300" width="1667" height="2500"><style type="text/css">.st0{fill:#0acf83}.st1{fill:#a259ff}.st2{fill:#f24e1e}.st3{fill:#ff7262}.st4{fill:#1abcfe}</style><title>Figma.logo</title><desc>Created using Figma</desc><path id="path0_fill" className="st0" d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z"/><path id="path1_fill" className="st1" d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z"/><path id="path1_fill_1_" className="st2" d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z"/><path id="path2_fill" className="st3" d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z"/><path id="path3_fill" className="st4" d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z"/></svg> Get Figma file
                    </a> */}
                </div>
            </div>
            <div className=" lg:mt-0 lg:col-span-5 lg:flex">
                {/* <img src={homepageimage} alt="hero image" /> */}
                <div className="bg-gray-100 mx-auto max-w-6xl bg-white py-10 px-10 lg:px-10 shadow-xl mb-24">
                    <form action="/payment" method="POST">
                        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
                            <div className="-mx-3 md:flex mb-6">
                            <div className="md:w-full px-3">

                                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="company">
                                    Nom*
                                </label>
                                <input  required="required" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company" name="dij_request[lastname_request]" type="text" placeholder="Nom" />
                                {/* <div>
                                    <span className="text-red-500 text-xs italic">
                                        Please fill out this field.
                                    </span>
                                </div> */}
                                </div>
                            </div>
                            <div className="-mx-3 md:flex mb-6">
                                <div className="md:w-full px-3">
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="application-link">
                                        Prénom*
                                    </label>
                                    <input required="required" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" name="dij_request[firstname_request]" id="application-link" type="text" placeholder="Prénom" />
                                </div>
                            </div>
                            <div className="-mx-3 md:flex mb-6">
                                <div className="md:w-full px-3">
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="location">
                                        Nombre de traduction*
                                    </label>
                                    <div>
                                        <select required="required" className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" name="dij_request[num_product]" id="location">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="-mx-3 md:flex mb-6">
                                <div className="md:w-full px-3">
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="location">
                                        Pays de délivrance du permis*
                                    </label>
                                    <div>
                                        <select required="required" className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" name="dij_request[country]" id="location">
                                            <option>France</option>
                                            <option>Suisse</option>
                                            <option>Allemagne</option>
                                            <option>Belgique</option>
                                            <option>Monaco</option>
                                            <option>Taïwan</option>
                                            <option>Slovénie</option>
                                            <option>Nouvelle-Calédonie</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="-mx-3 md:flex mb-6">
                                <div className="md:w-full px-3">
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="location">
                                        Mode de livraison*
                                    </label>
                                    <div>
                                        <select required="required" className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded"  name="dij_request[place_delivery]" id="location">
                                            <option value="HOME" selected="selected">Livraison chez vous - 79.90€ </option>
                                            <option value="JAPAN">Livraison au Japon (Hôtel, loueur, ou autre...) - 69.90€</option>
                                            <option value="711">Impression dans un magasin 7-Eleven - 69.90€</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="-mx-3 md:flex mb-6">
                                <div className="md:w-full px-3">
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="application-link">
                                        Email*
                                    </label>
                                    <input required="required" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" name="dij_request[email]" id="application-link" type="text" placeholder="Email" />
                                </div>
                            </div>
                            <div className="-mx-3 md:flex mb-6">
                                <div className="md:w-full px-3">
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="application-link">
                                        Téléphone*
                                    </label>
                                    <input required="required" className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="application-link" name="dij_request[phone]" type="text" placeholder="Téléphone" />
                                </div>
                            </div>
                            {/* <div className="-mx-3 md:flex mb-6">
                                <div className="md:w-full px-3">
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="application-link">
                                        Application Link*
                                    </label>
                                    <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="application-link" type="text" placeholder="http://...." />
                                </div>
                            </div>
                            <div className="-mx-3 md:flex mb-2">
                                <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="location">
                                        Location*
                                    </label>
                                    <div>
                                        <select className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="location">
                                            <option>Abuja</option>
                                            <option>Enugu</option>
                                            <option>Lagos</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="md:w-1/2 px-3">
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="job-type">
                                        Job Type*
                                    </label>
                                    <div>
                                        <select className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="job-type">
                                            <option>Full-Time</option>
                                            <option>Part-Time</option>
                                            <option>Internship</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="md:w-1/2 px-3">
                                    <label className="uppercase tracking-wide text-black text-xs font-bold mb-2" htmlFor="department">
                                        Department*
                                    </label>
                                    <div>
                                        <select className="w-full bg-gray-200 border border-gray-200 text-black text-xs py-3 px-4 pr-8 mb-3 rounded" id="department">
                                            <option>Engineering</option>
                                            <option>Design</option>
                                            <option>Customer Support</option>
                                        </select>
                                    </div>
                                </div>
                            </div> */}
                            <div className="-mx-3 md:flex mt-2">
                                <div className="md:w-full px-3">
                                    <button className="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
                                        Continuer
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>                
        </div>
    );
}
