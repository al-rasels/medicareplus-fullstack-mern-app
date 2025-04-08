import React, { useEffect } from "react";
import Layout from "../laylout/Layout";
import UserProfileSection from "../components/UserProfileSection";
import PatternBackground2 from "../laylout/PatternBackground2";
import PageTitle from "../components/utilityComponents/PageTitle";
import useUserAccessStore from "../store/userAccessStore";

function ProfilePage() {
  const { UserDetails, UserDetailsRequest } = useUserAccessStore();
  PageTitle("Profile");
  useEffect(() => {
    (async () => {
      UserDetails === null && (await UserDetailsRequest());
    })();
  }, []);
  return (
    <Layout>
      <PatternBackground2 />
      <UserProfileSection />
    </Layout>
  );
}

export default ProfilePage;
