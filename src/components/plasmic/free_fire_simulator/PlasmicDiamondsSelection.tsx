// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ncwW2Qgif2pGwQDF81hXqa
// Component: rNJR5WH_MPfP

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

import DiamondOptionBar from "../../DiamondOptionBar"; // plasmic-import: 98jyidEvWsmk/component

import { useScreenVariants as useScreenVariants_2BvNreuf1Eto } from "./PlasmicGlobalVariant__DesktopBase"; // plasmic-import: 2BVNreuf1ETO/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: ncwW2Qgif2pGwQDF81hXqa/projectcss
import sty from "./PlasmicDiamondsSelection.module.css"; // plasmic-import: rNJR5WH_MPfP/css

createPlasmicElementProxy;

export type PlasmicDiamondsSelection__VariantMembers = {};
export type PlasmicDiamondsSelection__VariantsArgs = {};
type VariantPropType = keyof PlasmicDiamondsSelection__VariantsArgs;
export const PlasmicDiamondsSelection__VariantProps =
  new Array<VariantPropType>();

export type PlasmicDiamondsSelection__ArgsType = {};
type ArgPropType = keyof PlasmicDiamondsSelection__ArgsType;
export const PlasmicDiamondsSelection__ArgProps = new Array<ArgPropType>();

export type PlasmicDiamondsSelection__OverridesType = {
  root?: Flex__<"div">;
  _1选择数量?: Flex__<"div">;
  text?: Flex__<"div">;
  freeBox?: Flex__<"div">;
};

export interface DefaultDiamondsSelectionProps {
  className?: string;
}

const $$ = {};

function PlasmicDiamondsSelection__RenderFunc(props: {
  variants: PlasmicDiamondsSelection__VariantsArgs;
  args: PlasmicDiamondsSelection__ArgsType;
  overrides: PlasmicDiamondsSelection__OverridesType;
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
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"_1\u9009\u62e9\u6570\u91cf"}
        data-plasmic-override={overrides._1选择数量}
        className={classNames(projectcss.all, sty._1选择数量)}
      >
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text
          )}
        >
          <Trans__>{"1. \u9009\u62e9\u6570\u91cf"}</Trans__>
        </div>
      </div>
      <Stack__
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <DiamondOptionBar
          className={classNames("__wab_instance", sty.diamondOptionBar__eWhPu)}
          topUp={
            hasVariant(globalVariants, "desktopBase", "desktopOnly") ? [] : []
          }
          withdraw={
            hasVariant(globalVariants, "desktopBase", "desktopOnly")
              ? ["_1stBar"]
              : ["_1stBar"]
          }
        />

        <DiamondOptionBar
          className={classNames("__wab_instance", sty.diamondOptionBar__ez9Qe)}
          topUp={
            hasVariant(globalVariants, "desktopBase", "desktopOnly") ? [] : []
          }
          withdraw={
            hasVariant(globalVariants, "desktopBase", "desktopOnly")
              ? ["_2ndBar"]
              : ["_2ndBar"]
          }
        />

        <DiamondOptionBar
          className={classNames("__wab_instance", sty.diamondOptionBar__xCfKa)}
          topUp={[]}
          withdraw={["_3rdBar"]}
        />
      </Stack__>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "_1\u9009\u62e9\u6570\u91cf", "text", "freeBox"],
  _1选择数量: ["_1\u9009\u62e9\u6570\u91cf", "text"],
  text: ["text"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  _1选择数量: "div";
  text: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDiamondsSelection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDiamondsSelection__VariantsArgs;
    args?: PlasmicDiamondsSelection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDiamondsSelection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDiamondsSelection__ArgsType,
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
          internalArgPropNames: PlasmicDiamondsSelection__ArgProps,
          internalVariantPropNames: PlasmicDiamondsSelection__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDiamondsSelection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDiamondsSelection";
  } else {
    func.displayName = `PlasmicDiamondsSelection.${nodeName}`;
  }
  return func;
}

export const PlasmicDiamondsSelection = Object.assign(
  // Top-level PlasmicDiamondsSelection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    _1选择数量: makeNodeComponent("_1\u9009\u62e9\u6570\u91cf"),
    text: makeNodeComponent("text"),
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicDiamondsSelection
    internalVariantProps: PlasmicDiamondsSelection__VariantProps,
    internalArgProps: PlasmicDiamondsSelection__ArgProps
  }
);

export default PlasmicDiamondsSelection;
/* prettier-ignore-end */
