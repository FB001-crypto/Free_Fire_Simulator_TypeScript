// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ncwW2Qgif2pGwQDF81hXqa
// Component: dbMG3IAfZ2Xo

import * as React from "react";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import DiamondsSelection from "../../DiamondsSelection"; // plasmic-import: rNJR5WH_MPfP/component
import NextButton from "../../NextButton"; // plasmic-import: Av2xkV_SUoiq/component

import { useScreenVariants as useScreenVariants_2BvNreuf1Eto } from "./PlasmicGlobalVariant__DesktopBase"; // plasmic-import: 2BVNreuf1ETO/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: ncwW2Qgif2pGwQDF81hXqa/projectcss
import sty from "./PlasmicWithdraw1stStepModal.module.css"; // plasmic-import: dbMG3IAfZ2Xo/css

import BackButtonSvgIcon from "./icons/PlasmicIcon__BackButtonSvg"; // plasmic-import: 62NNR1D0AqJT/icon
import Layer22Icon from "./icons/PlasmicIcon__Layer22"; // plasmic-import: SIu0NpOppXl6/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: jEgug0HHkt8v/icon
import RightSvgIcon from "./icons/PlasmicIcon__RightSvg"; // plasmic-import: JTHnt52H6OfL/icon

createPlasmicElementProxy;

export type PlasmicWithdraw1stStepModal__VariantMembers = {};
export type PlasmicWithdraw1stStepModal__VariantsArgs = {};
type VariantPropType = keyof PlasmicWithdraw1stStepModal__VariantsArgs;
export const PlasmicWithdraw1stStepModal__VariantProps =
  new Array<VariantPropType>();

export type PlasmicWithdraw1stStepModal__ArgsType = {};
type ArgPropType = keyof PlasmicWithdraw1stStepModal__ArgsType;
export const PlasmicWithdraw1stStepModal__ArgProps = new Array<ArgPropType>();

export type PlasmicWithdraw1stStepModal__OverridesType = {
  profileModal?: Flex__<"div">;
  profileHeader?: Flex__<"div">;
  closeModal2?: Flex__<"svg">;
  closeModal?: Flex__<"svg">;
  diamondsSelection?: Flex__<typeof DiamondsSelection>;
  nextButton?: Flex__<typeof NextButton>;
  svg?: Flex__<"svg">;
};

export interface DefaultWithdraw1stStepModalProps {
  className?: string;
}

const $$ = {};

function PlasmicWithdraw1stStepModal__RenderFunc(props: {
  variants: PlasmicWithdraw1stStepModal__VariantsArgs;
  args: PlasmicWithdraw1stStepModal__ArgsType;
  overrides: PlasmicWithdraw1stStepModal__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $translator = usePlasmicTranslator?.();

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const globalVariants = ensureGlobalVariants({
    desktopBase: useScreenVariants_2BvNreuf1Eto()
  });

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"profileModal"}
      data-plasmic-override={overrides.profileModal}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.profileModal
      )}
    >
      <div
        data-plasmic-name={"profileHeader"}
        data-plasmic-override={overrides.profileHeader}
        className={classNames(projectcss.all, sty.profileHeader)}
      >
        <BackButtonSvgIcon
          data-plasmic-name={"closeModal2"}
          data-plasmic-override={overrides.closeModal2}
          className={classNames(projectcss.all, sty.closeModal2)}
          role={"img"}
        />

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___0PxuD
          )}
        >
          <Trans__>{"\u5151\u6362\u73b0\u91d1"}</Trans__>
        </div>
        <Layer22Icon
          data-plasmic-name={"closeModal"}
          data-plasmic-override={overrides.closeModal}
          className={classNames(projectcss.all, sty.closeModal)}
          role={"img"}
        />
      </div>
      <div className={classNames(projectcss.all, sty.freeBox__yiDhp)}>
        <Stack__
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__uaFtt)}
        >
          <DiamondsSelection
            data-plasmic-name={"diamondsSelection"}
            data-plasmic-override={overrides.diamondsSelection}
            className={classNames("__wab_instance", sty.diamondsSelection)}
          />

          <NextButton
            data-plasmic-name={"nextButton"}
            data-plasmic-override={overrides.nextButton}
            className={classNames("__wab_instance", sty.nextButton)}
            endIcon={
              <RightSvgIcon
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                className={classNames(projectcss.all, sty.svg)}
                role={"img"}
              />
            }
            showEndIcon={true}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__rpn3S
              )}
            >
              <Trans__>
                {
                  <React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ color: "#000000" }}
                    >
                      {"Next (1/3)"}
                    </span>
                  </React.Fragment>
                }
              </Trans__>
            </div>
          </NextButton>
        </Stack__>
      </div>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  profileModal: [
    "profileModal",
    "profileHeader",
    "closeModal2",
    "closeModal",
    "diamondsSelection",
    "nextButton",
    "svg"
  ],
  profileHeader: ["profileHeader", "closeModal2", "closeModal"],
  closeModal2: ["closeModal2"],
  closeModal: ["closeModal"],
  diamondsSelection: ["diamondsSelection"],
  nextButton: ["nextButton", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  profileModal: "div";
  profileHeader: "div";
  closeModal2: "svg";
  closeModal: "svg";
  diamondsSelection: typeof DiamondsSelection;
  nextButton: typeof NextButton;
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicWithdraw1stStepModal__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicWithdraw1stStepModal__VariantsArgs;
    args?: PlasmicWithdraw1stStepModal__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicWithdraw1stStepModal__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicWithdraw1stStepModal__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicWithdraw1stStepModal__ArgProps,
          internalVariantPropNames: PlasmicWithdraw1stStepModal__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicWithdraw1stStepModal__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "profileModal") {
    func.displayName = "PlasmicWithdraw1stStepModal";
  } else {
    func.displayName = `PlasmicWithdraw1stStepModal.${nodeName}`;
  }
  return func;
}

export const PlasmicWithdraw1stStepModal = Object.assign(
  // Top-level PlasmicWithdraw1stStepModal renders the root element
  makeNodeComponent("profileModal"),
  {
    // Helper components rendering sub-elements
    profileHeader: makeNodeComponent("profileHeader"),
    closeModal2: makeNodeComponent("closeModal2"),
    closeModal: makeNodeComponent("closeModal"),
    diamondsSelection: makeNodeComponent("diamondsSelection"),
    nextButton: makeNodeComponent("nextButton"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicWithdraw1stStepModal
    internalVariantProps: PlasmicWithdraw1stStepModal__VariantProps,
    internalArgProps: PlasmicWithdraw1stStepModal__ArgProps
  }
);

export default PlasmicWithdraw1stStepModal;
/* prettier-ignore-end */
