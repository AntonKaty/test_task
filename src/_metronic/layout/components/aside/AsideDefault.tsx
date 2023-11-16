import clsx from "clsx";
import { FC } from "react";
import { KTIcon } from "../../../helpers";
import { Dropdown2 } from "../../../partials";
import { useLayout } from "../../core";

const AsideDefault: FC = () => {
  const { classes } = useLayout();
  return (
    <div
      id="kt_aside"
      className={clsx("aside pb-5 pt-5 pt-lg-0 ", classes.aside.join(" "))}
      data-kt-drawer="true"
      data-kt-drawer-name="aside"
      data-kt-drawer-activate="{default: true, lg: false}"
      data-kt-drawer-overlay="true"
      data-kt-drawer-width="{default:'80px', '300px': '100px'}"
      data-kt-drawer-direction="start"
      data-kt-drawer-toggle="#kt_aside_mobile_toggle"
    >
      {/* begin::Aside menu */}
      <div className="aside-menu flex-column-fluid" id="kt_aside_menu">
        {/* begin::Nav */}

        {/* end::Nav */}

        {/* end::Aside menu */}
      </div>
      {/* begin::Footer */}
      <div className="aside-footer flex-column-auto" id="kt_aside_footer">
        {/* begin::Menu */}
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className="btn btm-sm btn-icon btn-active-color-primary"
            data-kt-menu-trigger="click"
            data-kt-menu-overflow="true"
            data-kt-menu-placement="top-start"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-dismiss="click"
            title="Quick actions"
          >
            <KTIcon iconName="element-11" className="fs-2 text-lg-1" />
          </button>
          <Dropdown2 />
        </div>
        {/* end::Menu */}
      </div>
      {/* end::Footer */}
    </div>
  );
};

export { AsideDefault };
