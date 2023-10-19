import dosis from "@/fonts/dosis";
import Header from "../Header";
import SubHeader from "./SubHeader";
import Paragraph from "./Paragraph";
import ExternalLink from "./ExternalLink";
import Term from "./Term";
import ListPoint from "./ListPoint";

export default function Terms() {
    return (
        <div className="w-full h-full flex flex-col items-center">
            <Header isLanding={true} />
            <div className="flex flex-col w-[1000px] pt-[200px] pb-[100px] gap-12">
                <h1 className={`w-fit text-4xl text-gray-800 tracking-wide ${dosis.bold}`}>Terms and Conditions</h1>
                <Paragraph>
                    Welcome to Chat-fu, Inc., a Delaware Corporation with Identification Number "1234124". By accessing or using our website, chat-fu.com, and any services made available through it (collectively, the <Term>"Service"</Term>), you agree to comply with and be bound by these Terms and Conditions (<Term>"Terms"</Term>). These Terms govern your access to and use of the Service and constitute a legal agreement between you and Chat-fu, Inc. If you do not agree to these Terms, please do not use the Service. For any questions about these Terms, you can contact us at <ExternalLink link="mailto:hello@chat-fu.com">hello@chat-fu.com</ExternalLink>.
                </Paragraph>
                <SubHeader title="Description of Service" />
                <Paragraph>
                    Chat-fu, Inc. provides an online platform that enables users to create AI-enabled portfolio pages and websites (<Term>"Service"</Term>). Our Service offers a range of features including, but not limited to, website templates, AI-driven content suggestions, analytics, and hosting services. Users can access the Service through our website, chat-fu.com, after completing the registration process. While we strive to enhance and expand our offerings regularly, the scope, features, and functionality of the Service are subject to change without prior notice. By using our Service, you agree to be bound by these Terms and Conditions and any modifications thereof.
                </Paragraph>
                <SubHeader title="Acceptance of Terms" />
                <Paragraph>
                    By accessing or using the Service provided by Chat-fu, Inc., you signify your agreement to be bound by these Terms and Conditions. If you do not agree to these Terms, you may not access or use the Service. Chat-fu, Inc. reserves the right to modify or replace these Terms at any time, and it is your responsibility to review them periodically for changes. Continued use of the Service after any such changes constitutes your acceptance of the new Terms. If you do not agree to any future changes, you should stop using the Service immediately.
                </Paragraph>
                <SubHeader title="Changes to These Terms" />
                <Paragraph>
                    Chat-fu, Inc. reserves the right to update, modify, or replace these Terms and Conditions at any time, without prior notice. Any changes to these Terms will be effective immediately upon posting on our website, chat-fu.com. It is your responsibility to review these Terms periodically for updates. Your continued use of the Service following the posting of revised Terms indicates your acceptance of the changes. If you do not agree to the revised Terms, you must stop using the Service immediately.
                </Paragraph>
                <SubHeader title="Disclaimer" />
                <Paragraph>
                    The Service is provided by Chat-fu, Inc. on an "as-is" and "as-available" basis. Chat-fu, Inc. makes no representations or warranties of any kind, express or implied, as to the operation of the Service or the information, content, materials, or products included within the Service. To the full extent permissible by applicable law, Chat-fu, Inc. disclaims all warranties, express or implied, including but not limited to, implied warranties of merchantability and fitness for a particular purpose. Chat-fu, Inc. does not warrant that the Service will be uninterrupted, timely, secure, or error-free, or that defects, if any, will be corrected. You expressly agree that your use of the Service is at your sole risk.
                </Paragraph>
                <SubHeader title="Acceptable Use" />
                <Paragraph>
                    By using the Service provided by Chat-fu, Inc., you agree not to:

                    <ListPoint index={1}>Upload, post, or otherwise transmit any content that is unlawful, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, or invasive of another's privacy.</ListPoint>

                    <ListPoint index={2}>Use the Service for any illegal or unauthorized purpose, including but not limited to, copyright infringement.</ListPoint>

                    <ListPoint index={3}>Attempt to gain unauthorized access to the Service, other user accounts, or networks connected to the Service.</ListPoint>

                    <ListPoint index={4}>Interfere with or disrupt the Service or servers connected to the Service, or disobey any requirements or regulations of networks connected to the Service.</ListPoint>

                    <ListPoint index={5}>Use any robot, spider, scraper, or other automated means to access the Service for any purpose without Chat-fu, Inc.'s express written permission.</ListPoint>

                    <ListPoint index={6}>Impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity.</ListPoint>
                    <br/>
                    Violation of any of these terms may result in the immediate termination of your account and access to the Service, at Chat-fu, Inc.'s sole discretion.
                </Paragraph>
                <SubHeader title="Links to External Sites" />
                <Paragraph>
                    The Service may contain links to third-party websites or services that are not owned or controlled by Chat-fu, Inc. Chat-fu, Inc. has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that Chat-fu, Inc. shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services. We strongly recommend that you read the terms and conditions and privacy policies of any third-party websites or services that you visit.
                </Paragraph>
                <SubHeader title="Account Details" />
                <Paragraph>
                    To use the Service, you may be required to register for an account with Chat-fu, Inc. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for safeguarding your password and for any activities or actions that occur under your account, whether or not you have authorized such activities or actions. Chat-fu, Inc. cannot and will not be liable for any loss or damage arising from your failure to comply with this section. If you suspect any unauthorized use of your account, you must immediately notify Chat-fu, Inc. at <ExternalLink link="mailto:hello@chat-fu.com">hello@chat-fu.com</ExternalLink>.
                </Paragraph>
                <SubHeader title="Personal Data" />
                <Paragraph>
                    Chat-fu, Inc. is committed to protecting the privacy and security of your personal data. The information you provide during the registration process and your continued use of the Service is governed by our Privacy Policy, which is incorporated into these Terms and Conditions by reference. By using the Service, you consent to the collection, use, and disclosure of your personal information as outlined in our Privacy Policy. For more details on how we manage and protect your personal data, please refer to our Privacy Policy available on our website, chat-fu.com.
                </Paragraph>
                <SubHeader title="Limitation of Liability" />
                <Paragraph>
                    To the fullest extent permitted by applicable law, Chat-fu, Inc., its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from: (a) your use or inability to use the Service; (b) any unauthorized access to or use of our servers and/or any personal information stored therein.

                    Chat-fu, Inc.'s total liability in any matter arising out of or related to the Service is limited to the greater of (1) the amount that you paid for the Service during the twelve months prior to the event giving rise to the liability, or (2) $100.

                    This limitation will apply regardless of the form or source of claim or loss, whether the claim or loss was foreseeable, and whether a party has been advised of the possibility of the claim or loss.

                    You acknowledge that the limitations in this section are reasonable and appropriate.
                </Paragraph>
                <SubHeader title="Bugs or Viruses" />
                <Paragraph>
                    While Chat-fu, Inc. strives to ensure that the Service is secure and free of bugs, viruses, or other harmful components, we cannot guarantee that the Service will be entirely free from vulnerabilities. You are responsible for implementing sufficient procedures and checkpoints to satisfy your requirements for anti-virus protection and data accuracy, as well as for maintaining a means external to our Service for reconstructing any lost data. Chat-fu, Inc. will not be liable for any loss or damage caused by bugs, viruses, or other technologically harmful material that may infect your computer equipment, computer programs, data, or other proprietary material due to your use of the Service or due to your downloading of any material posted on it, or on any website linked to it.
                </Paragraph>
                <SubHeader title="Trademarks and Copyright" />
                <Paragraph>
                    All intellectual property rights in and to the Service, including but not limited to trademarks, service marks, and logos (<Term>"Marks"</Term>), as well as copyrighted material such as text, graphics, software, and multimedia content (<Term>"Copyrighted Material"</Term>), are owned by or licensed to Chat-fu, Inc. Unauthorized use of any Marks or Copyrighted Material is strictly prohibited. You may not copy, reproduce, distribute, or create derivative works from any Marks or Copyrighted Material without the express written permission of Chat-fu, Inc. or the respective copyright owner. Any unauthorized use may result in legal action against you.

                    By using the Service, you agree not to infringe on any of Chat-fu, Inc.'s intellectual property rights or those of third parties who have licensed their intellectual property to Chat-fu, Inc. Violation of this provision may result in the immediate termination of your account and legal action.
                </Paragraph>
                <SubHeader title="Revisions and Errata" />
                <Paragraph>
                    The content appearing on Chat-fu, Inc.'s Service could include technical, typographical, or photographic errors. Chat-fu, Inc. does not warrant that any of the materials on the Service are accurate, complete, or current. Chat-fu, Inc. may make changes to the materials contained on the Service at any time without notice. However, Chat-fu, Inc. does not make any commitment to update the materials. While we strive for accuracy, it is possible that the Service could include inaccuracies or errors, and unauthorized additions, deletions, and alterations could be made to the Service by third parties. If you become aware of any error or omission, please bring it to our attention by contacting us at <ExternalLink link="mailto:hello@chat-fu.com">hello@chat-fu.com</ExternalLink>.
                </Paragraph>
                <SubHeader title="Termination" />
                <Paragraph>
                    Chat-fu, Inc. reserves the right to terminate or suspend your account and access to the Service at any time, without notice, for conduct that violates these Terms and Conditions or is harmful to other users of the Service, Chat-fu, Inc., or third parties, or for any other reason at our sole discretion. Upon termination, you will no longer have access to the Service and any data stored on the Service may be deleted. Chat-fu, Inc. disclaims any liability for the loss of such data upon termination. You may also terminate your account and these Terms and Conditions at any time by notifying us at <ExternalLink link="mailto:hello@chat-fu.com">hello@chat-fu.com</ExternalLink>. Upon termination, any obligations or rights granted or incurred will survive, including but not limited to the limitations on liability and any dispute resolution procedures outlined in these Terms and Conditions.
                </Paragraph>
                <SubHeader title="Governing Law" />
                <Paragraph>
                    These Terms and Conditions and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of the State of Utah, without regard to its conflict of law provisions. You agree to submit to the exclusive jurisdiction of the state and federal courts located in the State of Utah for the resolution of any legal matter arising from these Terms and Conditions or related to your use of the Service.
                </Paragraph>
            </div>
        </div>
    )
}