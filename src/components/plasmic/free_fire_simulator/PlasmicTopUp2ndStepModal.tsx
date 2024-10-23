// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ncwW2Qgif2pGwQDF81hXqa
// Component: BfWnrpCrfiGl

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

import CurrencySelection from "../../CurrencySelection"; // plasmic-import: I0ZtuiJGttrZ/component
import ChannelSelection from "../../ChannelSelection"; // plasmic-import: 0iHTuHTgXBjV/component
import NextButton from "../../NextButton"; // plasmic-import: Av2xkV_SUoiq/component

import { useScreenVariants as useScreenVariants_2BvNreuf1Eto } from "./PlasmicGlobalVariant__DesktopBase"; // plasmic-import: 2BVNreuf1ETO/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: ncwW2Qgif2pGwQDF81hXqa/projectcss
import sty from "./PlasmicTopUp2ndStepModal.module.css"; // plasmic-import: BfWnrpCrfiGl/css

import BackButtonSvgIcon from "./icons/PlasmicIcon__BackButtonSvg"; // plasmic-import: 62NNR1D0AqJT/icon
import Layer22Icon from "./icons/PlasmicIcon__Layer22"; // plasmic-import: SIu0NpOppXl6/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: jEgug0HHkt8v/icon
import RightSvgIcon from "./icons/PlasmicIcon__RightSvg"; // plasmic-import: JTHnt52H6OfL/icon

createPlasmicElementProxy;

export type PlasmicTopUp2ndStepModal__VariantMembers = {};
export type PlasmicTopUp2ndStepModal__VariantsArgs = {};
type VariantPropType = keyof PlasmicTopUp2ndStepModal__VariantsArgs;
export const PlasmicTopUp2ndStepModal__VariantProps =
  new Array<VariantPropType>();

export type PlasmicTopUp2ndStepModal__ArgsType = {};
type ArgPropType = keyof PlasmicTopUp2ndStepModal__ArgsType;
export const PlasmicTopUp2ndStepModal__ArgProps = new Array<ArgPropType>();

export type PlasmicTopUp2ndStepModal__OverridesType = {
  profileModal?: Flex__<"div">;
  profileHeader?: Flex__<"div">;
  closeModal2?: Flex__<"svg">;
  closeModal?: Flex__<"svg">;
  currencySelection?: Flex__<typeof CurrencySelection>;
  channelSelection?: Flex__<typeof ChannelSelection>;
  nextButton?: Flex__<typeof NextButton>;
  svg?: Flex__<"svg">;
};

export interface DefaultTopUp2ndStepModalProps {
  className?: string;
}

const $$ = {};

function PlasmicTopUp2ndStepModal__RenderFunc(props: {
  variants: PlasmicTopUp2ndStepModal__VariantsArgs;
  args: PlasmicTopUp2ndStepModal__ArgsType;
  overrides: PlasmicTopUp2ndStepModal__OverridesType;
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
            sty.text__dPvom
          )}
        >
          <Trans__>{"\u8d2d\u4e70\u94bb\u77f3"}</Trans__>
        </div>
        <Layer22Icon
          data-plasmic-name={"closeModal"}
          data-plasmic-override={overrides.closeModal}
          className={classNames(projectcss.all, sty.closeModal)}
          role={"img"}
        />
      </div>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__ofNkf)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__lfAww)}>
          <div className={classNames(projectcss.all, sty.freeBox__sUonN)}>
            <CurrencySelection
              data-plasmic-name={"currencySelection"}
              data-plasmic-override={overrides.currencySelection}
              className={classNames("__wab_instance", sty.currencySelection)}
            />

            <ChannelSelection
              data-plasmic-name={"channelSelection"}
              data-plasmic-override={overrides.channelSelection}
              className={classNames("__wab_instance", sty.channelSelection)}
            />
          </div>
          <div className={classNames(projectcss.all, sty.freeBox__bnktc)}>
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
              submitsForm={true}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___9EHxG
                )}
              >
                <Trans__>
                  {
                    <React.Fragment>
                      <span
                        className={"plasmic_default__all plasmic_default__span"}
                        style={{ color: "#000000" }}
                      >
                        {"\u7acb\u5373\u652f\u4ed8"}
                      </span>
                    </React.Fragment>
                  }
                </Trans__>
              </div>
            </NextButton>
          </div>
        </div>
      </Stack__>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  profileModal: [
    "profileModal",
    "profileHeader",
    "closeModal2",
    "closeModal",
    "currencySelection",
    "channelSelection",
    "nextButton",
    "svg"
  ],
  profileHeader: ["profileHeader", "closeModal2", "closeModal"],
  closeModal2: ["closeModal2"],
  closeModal: ["closeModal"],
  currencySelection: ["currencySelection"],
  channelSelection: ["channelSelection"],
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
  currencySelection: typeof CurrencySelection;
  channelSelection: typeof ChannelSelection;
  nextButton: typeof NextButton;
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicTopUp2ndStepModal__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicTopUp2ndStepModal__VariantsArgs;
    args?: PlasmicTopUp2ndStepModal__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicTopUp2ndStepModal__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicTopUp2ndStepModal__ArgsType,
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
          internalArgPropNames: PlasmicTopUp2ndStepModal__ArgProps,
          internalVariantPropNames: PlasmicTopUp2ndStepModal__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTopUp2ndStepModal__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "profileModal") {
    func.displayName = "PlasmicTopUp2ndStepModal";
  } else {
    func.displayName = `PlasmicTopUp2ndStepModal.${nodeName}`;
  }
  return func;
}

export const PlasmicTopUp2ndStepModal = Object.assign(
  // Top-level PlasmicTopUp2ndStepModal renders the root element
  makeNodeComponent("profileModal"),
  {
    // Helper components rendering sub-elements
    profileHeader: makeNodeComponent("profileHeader"),
    closeModal2: makeNodeComponent("closeModal2"),
    closeModal: makeNodeComponent("closeModal"),
    currencySelection: makeNodeComponent("currencySelection"),
    channelSelection: makeNodeComponent("channelSelection"),
    nextButton: makeNodeComponent("nextButton"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicTopUp2ndStepModal
    internalVariantProps: PlasmicTopUp2ndStepModal__VariantProps,
    internalArgProps: PlasmicTopUp2ndStepModal__ArgProps
  }
);

export default PlasmicTopUp2ndStepModal;
/* prettier-ignore-end */
