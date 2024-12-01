const PrivacyPolicy = () => {
  return (
    <div className="text-white px-12 pt-52 pb-28 relative">
      <h2 className="text-[24px] md:text-[36px] text-center mb-7">
        Privacy Policy for Kalyna Group
      </h2>
      <div className="mb-8">
        <p className="mb-5 text-lg">
          This Privacy Policy describes how Kalyna Group (the &quot;Site&ldquo;,
          &quot;we&ldquo;, &quot;us&ldquo;, or &quot;our&ldquo;) collects, uses,
          and discloses your personal information when you visit, use our
          services, or communicate with us (collectively, the
          &quot;Services&ldquo;). For purposes of this Privacy Policy,
          &quot;you&ldquo; and &quot;your&ldquo; means you as the user of the
          Services, whether you are a customer or a website visitor.
        </p>
        <p className="text-lg font-semibold underline decoration-solid">
          Please read this Privacy Policy carefully. By using and accessing any
          of the Services, you agree to the collection, use, and disclosure of
          your information as described in this Privacy Policy. If you do not
          agree to this Privacy Policy, please do not use or access any of the
          Services.
        </p>
      </div>
      <div className="mb-8">
        <h3 className="mb-3 text-lg font-semibold">
          Changes to This Privacy Policy
        </h3>
        <p className="text-lg">
          We may update this Privacy Policy from time to time to reflect changes
          to our practices or for other operational, legal, or regulatory
          reasons. We will post the revised Privacy Policy on the Site and
          update the &quot;Last updated&ldquo; date.
        </p>
      </div>
      <div className="mb-8">
        <h3 className="mb-3 text-lg font-semibold">
          How We Collect and Use Your Personal Information
        </h3>
        <p className="mb-2 text-lg">
          To provide the Services, we collect and have collected over the past
          12 months personal information about you, which may include:
        </p>
        <ul className="font-semibold text-lg list-disc flex flex-col gap-2 mb-6 pl-6">
          <li>Location</li>
          <li>Email Address</li>
          <li>Phone Number</li>
        </ul>
        <p className="mb-2 text-lg">
          We use this personal information for the following purposes:
        </p>
        <ul className="text-lg list-disc flex flex-col gap-2 mb-3 pl-6">
          <li>
            <span className="font-semibold">Analytics and Marketing:</span> To
            analyze user behavior, improve our services, and provide targeted
            advertising.
          </li>
          <li>
            <span className="font-semibold">Application Processing:</span> To
            process your inquiries and applications.
          </li>
        </ul>
      </div>
      <div className="mb-8">
        <h3 className="mb-3 text-lg font-semibold">Cookies</h3>
        <p className="text-lg">
          We use cookies and similar technologies on our Site. Cookies are used
          for analytics, advertising, and improving the user experience. You can
          manage your cookie preferences through your browser settings, but
          please note that disabling cookies may affect the functionality of the
          Site.
        </p>
      </div>
      <div className="mb-8">
        <h3 className="mb-3 text-lg font-semibold">
          How We Disclose Personal Information
        </h3>
        <p className="text-lg">
          We do not share your personal information with third parties. All
          information collected is kept confidential and used solely for the
          purposes outlined in this Privacy Policy.
        </p>
      </div>
      <div className="mb-8">
        <h3 className="mb-3 text-lg font-semibold">Your Rights and Choices</h3>
        <p className="mb-2 text-lg">
          Depending on your location, you may have certain rights regarding your
          personal information, including:
        </p>
        <ul className="text-lg list-disc flex flex-col gap-2 mb-3 pl-6">
          <li>
            <span className="font-semibold">Right to Access/Know:</span> You may
            request access to personal information that we hold about you.
          </li>
          <li>
            <span className="font-semibold">Right to Delete:</span> You may
            request that we delete personal information we maintain about you.
          </li>
          <li>
            <span className="font-semibold">Right to Correct:</span> You may
            request correction of inaccurate personal information.
          </li>
          <li>
            <span className="font-semibold">Right to Portability:</span> You may
            request a copy of your personal information and the transfer of that
            information to a third party.
          </li>
        </ul>
      </div>
      <div>
        <h3 className="mb-3 text-lg font-semibold">Contact Information</h3>
        <p className="text-lg relative">
          If you have questions about our privacy practices or this Privacy
          Policy, or if you would like to exercise any of the rights available
          to you, please email us at{' '}
          <span className="relative">
            <a
              className="font-semibold cursor-pointer after:absolute after:-bottom-2 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full hover:after:duration-200"
              href="mailto:info@kalynagroup.com"
            >
              info@kalynagroup.com
            </a>
          </span>
          .
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
