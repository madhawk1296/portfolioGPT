import dosis from "@/fonts/dosis";
import Header from "../Header";
import ExternalLink from "../Terms/ExternalLink";
import Paragraph from "../Terms/Paragraph";
import SubHeader from "../Terms/SubHeader";
import ListPoint from "../Terms/ListPoint";
import Footer from "../Footer";

export default function Privacy() {
    return (
        <div className="relative w-full h-full flex flex-col items-center">
            <Header isLanding={true} />
            <div className="flex flex-col w-[1000px] pt-[200px] pb-[100px] gap-12">
                <h1 className={`w-fit text-4xl text-gray-800 tracking-wide ${dosis.bold}`}>Privacy Policy of Chat-fu, Inc.</h1>
                <SubHeader title="Introduction" />
                <Paragraph>
                    Welcome to the Privacy Policy of Chat-fu, Inc. Your privacy is of utmost importance to us. This Privacy Policy outlines the types of information we collect, how we use it, and the measures we take to safeguard your personal information when you use our Service. By accessing or using the Service, you agree to the collection and use of your information in accordance with this Privacy Policy. If you do not agree with our policies and practices, please do not use our Service. For any questions or concerns regarding this Privacy Policy, please contact us at <ExternalLink link="mailto:hello@chat-fu.com">hello@chat-fu.com</ExternalLink>.
                </Paragraph>
                <SubHeader title="Information We Collect" />
                <Paragraph>
                This section details the various kinds of information we may collect from you or that you may provide when you use our Service:
                <br/>
                <ListPoint index={1}>Personal Information: This includes, but is not limited to, your name, email address, and contact details, which you provide during the registration process or through any forms on our website.</ListPoint>

                <ListPoint index={2}>Usage Data: We collect information on how the Service is accessed and used. This may include your computer's IP address, browser type, browser version, the pages you visit on our Service, the time and date of your visit, and other diagnostic data.</ListPoint>

                <ListPoint index={3}>Cookies and Similar Technologies: We use cookies and similar tracking technologies to track user activity and hold certain information.</ListPoint>

                <ListPoint index={4}>Third-Party Data: We may receive information about you from third-party services that are integrated into our Service, such as social media platforms.</ListPoint>

                <ListPoint index={5}>Payment Information: If the Service includes paid features, we may collect payment and billing information to process transactions.</ListPoint>
                <br/>
                By using our Service, you consent to the collection of this information.
                </Paragraph>
                <SubHeader title="How We Use Your Information" />
                <Paragraph>
                    We use the information we collect for various purposes, including:
                    <br/>
                    <ListPoint index={1}>To Provide and Maintain the Service: We use your personal information to provide the Service, maintain its quality, and secure it.</ListPoint>

                    <ListPoint index={2}>Communication: We use your contact details to communicate with you, respond to your inquiries, and send important notices such as changes to our terms or policies.</ListPoint>

                    <ListPoint index={3}>Personalization: We use your usage data and preferences to understand your needs and preferences, improving your experience with the Service.</ListPoint>

                    <ListPoint index={4}>Marketing: We may use your information to send you promotional materials and offers, unless you have opted out of receiving such communications.</ListPoint>

                    <ListPoint index={5}>Analytics: We use aggregated and anonymized data to monitor user activity patterns and Service usage, which helps us improve the Service.</ListPoint>

                    <ListPoint index={6}>Legal Requirements: We may use your information to comply with applicable laws and regulations, and to enforce our terms and conditions.</ListPoint>

                    <ListPoint index={7}>Payment Processing: If applicable, we use your payment information to process transactions related to the Service.</ListPoint>
                    <br/>
                    <br/>
                    By using our Service, you consent to the use of your information for these purposes.
                </Paragraph>
                <SubHeader title="Cookies and Tracking Technologies" />
                <Paragraph>
                    We use cookies, pixel tags, and other tracking technologies to collect information about your interaction with our Service, and to remember you and your preferences:
                    <br/>
                    <ListPoint index={1}>Essential Cookies: These are required for the basic functionalities of the Service. Without these cookies, the Service cannot function properly.</ListPoint>

                    <ListPoint index={2}>Performance Cookies: These cookies collect information about how you use the Service, like which pages you visited and which links you clicked on, to help us improve its performance.</ListPoint>

                    <ListPoint index={3}>Functionality Cookies: These cookies allow us to remember choices you make when you use the Service, such as your language or region, and provide enhanced, more personalized features.</ListPoint>

                    <ListPoint index={4}>Advertising Cookies: These cookies are used to deliver relevant ads to you on third-party websites and apps.</ListPoint>

                    <ListPoint index={5}>Analytics Cookies: These cookies help us understand how our Service is performing and being used, by collecting and reporting data anonymously.</ListPoint>
                    <br/>
                    <br/>
                    You have the option to manage or disable cookies through your browser settings, but doing so may affect the availability and functionality of the Service. By using our Service, you consent to the use of cookies and other tracking technologies in accordance with this Privacy Policy.
                </Paragraph>
                <SubHeader title="Information Sharing and Disclosure" />
                <Paragraph>
                    We take your privacy seriously and do not sell your personal information to third parties. However, we may share your information in the following circumstances:
                    <br/>
                    <ListPoint index={1}>Service Providers: We may employ third-party companies and individuals to facilitate our Service, provide the Service on our behalf, or perform services related to the Service (e.g., payment processing, maintenance, hosting, database management, web analytics, etc.). These third parties have access to your information only to perform these tasks and are obligated not to disclose or use it for any other purpose.</ListPoint>

                    <ListPoint index={2}>Legal Requirements: We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).</ListPoint>

                    <ListPoint index={3}>Mergers and Acquisitions: In the event that Chat-fu, Inc. is involved in a merger, acquisition, or asset sale, your personal information may be transferred to the new entity.</ListPoint>

                    <ListPoint index={4}>Consent: We may share your information for any other purpose disclosed by us when you provide the information or with your explicit consent.</ListPoint>

                    <ListPoint index={5}>Aggregated or Anonymized Data: We may share aggregated or anonymized information that does not directly identify you for industry analysis, demographic profiling, or other purposes.</ListPoint>
                    <br/>
                    By using our Service, you consent to the sharing and disclosure of your information in accordance with this section.
                </Paragraph>
                <SubHeader title="Data Security" />
                <Paragraph>
                    We are committed to protecting the security of your personal information and take reasonable precautions to safeguard it. We employ a variety of technical and organizational measures, such as encryption and authentication tools, to maintain the safety of your data. However, no method of transmission over the Internet or electronic storage is 100% secure. Therefore, while we strive to protect your personal information, we cannot guarantee its absolute security.
                    <br/><br/>

                    If we become aware of any data breach that may affect your personal information, we will promptly take appropriate action and notify you in accordance with applicable laws and regulations.
                    <br/><br/>

                    By using our Service, you acknowledge that you understand and agree to assume these risks.
                </Paragraph>
                <SubHeader title="Children's Privacy" />
                <Paragraph>
                    Our Service is not intended for use by individuals under the age of 13, and we do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under the age of 13 without parental consent, we will take steps to remove that information from our systems as quickly as possible.
                    <br/><br/>

                    Parents and guardians who believe that their child has provided us with personal information should contact us immediately at hello@chat-fu.com so that we can take appropriate action.
                    <br/><br/>

                    By using our Service, you represent that you are at least 13 years old or that you are the parent or guardian of such a minor and consent to their use of the Service.
                </Paragraph>
                <SubHeader title="Your Rights and Choices" />
                <Paragraph>
                    You have various rights and choices concerning your personal information:
                    <br/>
                    <ListPoint index={1}>Access and Update: You have the right to access, correct, or update your personal information at any time through the settings in your user account or by contacting us.</ListPoint>

                    <ListPoint index={2}>Deletion: You can request the deletion of your personal information, subject to certain legal exceptions.</ListPoint>

                    <ListPoint index={3}>Opt-Out: You have the right to opt-out of receiving marketing communications from us. You can exercise this right by following the opt-out or unsubscribe instructions in the messages we send you.</ListPoint>

                    <ListPoint index={4}>Data Portability: You have the right to request a copy of the information we hold about you in a structured, commonly-used, and machine-readable format for the purpose of transferring it to another service.</ListPoint>

                    <ListPoint index={5}>Restriction and Objection: You have the right to restrict or object to our processing of your personal information under certain conditions.</ListPoint>

                    <ListPoint index={6}>Consent Withdrawal: If you have given consent to the processing of your personal information, you have the right to withdraw that consent at any time.</ListPoint>
                    <br/><br/>
                    To exercise any of these rights, please contact us at <ExternalLink link="mailto:hello@chat-fu.com">hello@chat-fu.com</ExternalLink>. We will respond to your request in accordance with applicable laws and regulations.
                    <br/><br/>
                    By using our Service, you acknowledge and agree that you have these rights and choices and have the ability to exercise them.
                </Paragraph>
                <SubHeader title="International Data Transfers" />
                <Paragraph>
                    Our Service is operated in the United States, but we may transfer your personal information to other countries or jurisdictions, which may have different data protection laws. When we transfer your data internationally, we take steps to ensure that adequate safeguards are in place to protect your personal information in accordance with this Privacy Policy and applicable laws.
                    <br/><br/>
                    By using our Service, you consent to the transfer, storage, and processing of your personal information in countries other than your country of residence, including the United States. If you are a resident of the European Economic Area (EEA), we will take appropriate measures to ensure that your personal information receives an adequate level of protection when transferred outside the EEA.
                </Paragraph>
                <SubHeader title="Third-Party Links and Services" />
                <Paragraph>
                    Our Service may contain links to third-party websites, applications, or services that are not owned or controlled by Chat-fu, Inc. We are not responsible for the privacy practices or content of these third-party sites. This Privacy Policy does not apply to any third-party websites or services, and we encourage you to read the privacy policies of any third-party services you visit.
                    <br/><br/>
                    By using our Service, you acknowledge and agree that we are not liable for any loss or damage arising from your use of any third-party website, application, or services. We recommend that you review the privacy policies of any third-party sites that you choose to visit.
                </Paragraph>
                <SubHeader title="Changes to This Privacy Policy" />
                <Paragraph>
                    We reserve the right to update or modify this Privacy Policy at any time. Any changes will become effective immediately upon their posting on our Service. We will notify you of any significant changes by sending you an email or by posting a notice on our Service. Your continued use of the Service after the posting of any amended Privacy Policy signifies your acceptance of the changes.
                    <br/><br/>
                    We encourage you to periodically review this Privacy Policy to stay informed about how we are protecting your personal information. By using our Service, you acknowledge and agree to be bound by any changes to this Privacy Policy.
                </Paragraph>
                <SubHeader title="Contact Information" />
                <Paragraph>
                    If you have any questions, concerns, or comments regarding this Privacy Policy or our privacy practices, please contact us at:
                    <br/><br/>
                    Chat-fu, Inc.
                    Email: <ExternalLink link="mailto:hello@chat-fu.com">hello@chat-fu.com</ExternalLink>
                    <br/><br/>

                    We are committed to resolving any complaints or inquiries you may have about our use of your personal information. Your privacy is important to us, and we encourage you to reach out with any concerns you may have.
                </Paragraph>
                <SubHeader title="Complaints and Dispute Resolution" />
                <Paragraph>
                    If you have any complaints regarding our compliance with this Privacy Policy, you are encouraged to contact us at hello@chat-fu.com. We will investigate and attempt to resolve any complaints and disputes regarding the use and disclosure of personal information.
                    <br/><br/>
                    If you are not satisfied with our response, you have the right to lodge a complaint with the relevant supervisory authority in your jurisdiction. We will provide information about how to do this upon request.
                    <br/><br/>
                    By using our Service, you acknowledge and agree that you have the right to make a complaint and seek resolution as described above.
                </Paragraph>
                <SubHeader title="Governing Law and Jurisdiction" />
                <Paragraph>
                    This Privacy Policy and any disputes related to it or to the use of your personal information are governed by the laws of the State of Utah, United States, without regard to its conflict of law principles. By using our Service, you consent to the exclusive jurisdiction of the courts located in Utah for the resolution of any disputes arising from or related to this Privacy Policy or your use of our Service.
                </Paragraph>
            </div>
            <Footer />
        </div>
    )
}