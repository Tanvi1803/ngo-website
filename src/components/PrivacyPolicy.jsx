import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
    return (
        <motion.div
            className="flex flex-col items-center justify-center min-h-screen p-4 text-black border-[#fee57e] border-8 bg-gray-100 "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <motion.h2
                className="pt-12 mb-8 text-4xl text-center md:text-6xl text-[#280101] font-bold underline-travel"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Privacy Policy
            </motion.h2>
            <motion.div
                className="w-full max-w-3xl p-8 overflow-auto bg-white rounded-md shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                <div className="space-y-4 text-black">
                    <p>Maati 16 is an independent, Not for Profit Organization founded in 2016, having its office at Plot D-5, Block D, Om Vihar, Phase – V, Near West Point School, New Delhi – 110059, which has its online portal at https://  (the “Website”) By using (browsing or making a donation or shopping on) our Website or by subscribing to or using any of our services (“Services”), you agree to comply with and be bound by the following terms of the Privacy Policy (The “Privacy Policy”)</p>
                    <p>Please review the following provisions carefully. If you do not agree to any of these provisions, please do not use this Website.</p>
                    <p>The term “Maati 16” or “us”, “our” or “we” refers to the owner of the Website, i.e. Maati 16. The term “you” refers to you, the user or viewer of our Website or any of the Services.</p>
                    <p>Maati 16 takes your privacy seriously and does not compromise on taking stringent measures in protecting your information including user, payment and order data. We do not share your information with any third party systems.</p>
                    <h3 className="font-bold">Personal Data Privacy</h3>
                    <ul className="list-disc list-inside">
                        <li>Maati 16 does not collect any personal information about users, except that which is knowingly and specifically supplied to us by the user.</li>
                        <li>Maati 16 is committed to ensuring the privacy of your personal information.</li>
                        <li>We will not sell or pass on your information to any other organization outside of Maati 16 unless you specifically and expressly give us permission to do so.</li>
                        <li>We always give you the option to unsubscribe from our mailing lists.</li>
                        <li>If you are under 18 years old, we suggest that you ask your parents or guardian before signing up on this site.</li>
                    </ul>
                    <p>We do not collect/store your banking information like credit/debit card/net banking information on our server. Our Payment gateway processes the transaction through the respective banking system.</p>
                    <h3 className="font-bold">What information do we collect?</h3>
                    <p>I. Personal information such as name, address, telephone numbers, e-mail addresses, and date of birth (where appropriate). We collect this information only in connection with specific activities, such as donations asks, campaigns, feedback, surveys, email newsletter subscriptions, etc. You don’t have to disclose any of this information if you do not wish to.</p>
                    <p>II. Non-personal information: Maati 16 collects data such as IP address (the location of the computer on the internet), pages accessed and files downloaded. This helps us to determine how many individuals use our site, how many people visit on a regular basis, which pages are most popular, and which pages are least popular. This information doesn’t tell us anything about who you are, it simply allows us to monitor and improve our service.</p>
                    <h3 className="font-bold">Where will the information be held?</h3>
                    <p>Personal information submitted through the forms on this site is held only in a Maati 16 database. We confirm that Maati 16 will not share the information you give to us on this website with any other organization outside of Maati 16 unless you have specifically given us permission to do so.</p>
                    <h3 className="font-bold">Information from under 18s</h3>
                    <p>If you are under 18, be sure to obtain your parent’s or guardian’s permission before you send any information about yourself (your name, address, e-mail address, etc.) to us or anyone else over the internet. We encourage parents to get involved with their children’s use of the internet and to be aware of the activities in which they are participating.</p>
                    <h3 className="font-bold">Your Right to access the information</h3>
                    <p>At any time, you can ask us for a copy of the personal information that we hold about you or request a correction or deletion of information.</p>
                    <h3 className="font-bold">External links</h3>
                    <p>There are links on this Website that take you to other websites outside of our service. Any links provided to third-party websites outside of this site are provided solely for your convenience. The operation and content of such third-party websites is beyond our control, and we do not endorse in any manner whatsoever or accept any responsibility for the content or other material that may be contained on such websites, the use of such websites, or any products or services advertised on or sold through any such web sites. We will not be liable under any circumstances for any damages whatsoever, direct or indirect, resulting from any use of this website or any other third party website linked to this website, whether or not we are advised of the possibility of such damages.</p>
                    <p>Emails are sent only to Maati 16 supporters/ users who have chosen to receive them (opted-in) or who have made a purchase or made a donation on our website. At any time, you can notify us that you wish to stop receiving these emails. In addition, we keep a record of your past donations, purchases, returns, and credits. We may also ask you for information regarding your personal preferences and demographics to help us better meet your needs.</p>
                    <p>If we are required to intercept, disclose, monitor and/or store your personal information:</p>
                    <ul className="list-disc list-inside">
                        <li>(a) by law;</li>
                        <li>(b) to conduct our business;</li>
                        <li>(c) to secure our systems, or</li>
                        <li>(d) to enforce our own rights, we will do so in the manner as prescribed by law.</li>
                    </ul>
                    <p>Such interception, disclosure, monitoring and storage may take place without your knowledge. In that case, we will not be liable to you or any third party for any damages howsoever arising from such interception, disclosure, monitoring and storage. In order to ensure that all our Users comply with the Terms of Use, we may monitor your personal information to the extent that this may be required to determine compliance and/or to identify instances of non-compliance. To ensure that the security and integrity of our Site/ products/ services are safeguarded, we may monitor your personal information. This monitoring may include (without limitation) the filtering of incoming and outgoing electronic data messages to identify, limit and/or prevent the transmission of spam, viruses and/or unlawful, defamatory, obscene or otherwise undesirable material or content.</p>
                    <p>You acknowledge that this Privacy Policy is part of the Terms of Use and you unconditionally agree that using Maati 16 Site signifies your assent to Maati 16’s Privacy Policy. If you do not agree with this Privacy Policy, please do not use our Site. Your visit and any dispute over privacy are subject to this Privacy Policy and our Terms of Use, including limitations on damages. Maati 16 reserves the right to modify the Terms of Use and this Privacy Policy, at any time.</p>
                    <p>If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us at maati16official@gmail.com. We will promptly correct any information found to be incorrect. You can also speak to us at +91 9870112134</p>
                </div>
                <div className="flex justify-center pt-2">
                        <Link to="/faqs"
                            className="bg-amber-500 hover:bg-[#e09528] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Back
                        </Link>
                    </div>
            </motion.div>
        </motion.div>

    );
};

export default PrivacyPolicy;
