import { useEffect } from "react";
import { PageTitle } from "../../../_metronic/layout/core";
import { StatisticsWidget5 } from "../../../_metronic/partials/widgets";
import { UsersListWrapper } from "../../modules/apps/user-management/users-list/UsersList";

const DashboardPage = () => {
  useEffect(() => {
    // We have to show toolbar only for dashboard page
    document.getElementById("kt_layout_toolbar")?.classList.remove("d-none");
    return () => {
      document.getElementById("kt_layout_toolbar")?.classList.add("d-none");
    };
  }, []);

  return (
    <>
      <PageTitle>Dashboard</PageTitle>
    </>
  );
};

const DashboardWrapper = () => {
  return (
    <>
      {/* <PageTitle breadcrumbs={[]}>
        {/* {intl.formatMessage({ id: "MENU.DASHBOARD" })} 
      </PageTitle> */}

      <div className="row g-5 g-xl-8">
        <div className="col-xl-3">
          <StatisticsWidget5
            className="card-xl-stretch mb-xl-8"
            svgIcon="chart-simple"
            color="white"
            iconColor="primary"
            title="500M$"
            description="SAP UI Progress"
          />
        </div>

        <div className="col-xl-3">
          <StatisticsWidget5
            className="card-xl-stretch mb-xl-8"
            svgIcon="cheque"
            color="dark"
            iconColor="white"
            title="+3000"
            titleColor="white"
            description="New Customers"
            descriptionColor="white"
          />
        </div>

        <div className="col-xl-3">
          <StatisticsWidget5
            className="card-xl-stretch mb-xl-8"
            svgIcon="briefcase"
            color="warning"
            iconColor="white"
            title="$50,000"
            titleColor="white"
            description="Milestone Reached"
            descriptionColor="white"
          />
        </div>

        <div className="col-xl-3">
          <StatisticsWidget5
            className="card-xl-stretch mb-5 mb-xl-8"
            svgIcon="chart-pie-simple"
            color="info"
            iconColor="white"
            title="$50,000"
            titleColor="white"
            description="Milestone Reached"
            descriptionColor="white"
          />
        </div>
      </div>

      <UsersListWrapper />
      <DashboardPage />
    </>
  );
};

export { DashboardWrapper };
