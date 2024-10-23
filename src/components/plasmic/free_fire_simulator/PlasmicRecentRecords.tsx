// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ncwW2Qgif2pGwQDF81hXqa
// Component: e6HpMvhYjvtJ

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

import ResultBox from "../../ResultBox"; // plasmic-import: EmHW-l0fTCHr/component

import { useScreenVariants as useScreenVariants_2BvNreuf1Eto } from "./PlasmicGlobalVariant__DesktopBase"; // plasmic-import: 2BVNreuf1ETO/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: ncwW2Qgif2pGwQDF81hXqa/projectcss
import sty from "./PlasmicRecentRecords.module.css"; // plasmic-import: e6HpMvhYjvtJ/css

createPlasmicElementProxy;

export type PlasmicRecentRecords__VariantMembers = {};
export type PlasmicRecentRecords__VariantsArgs = {};
type VariantPropType = keyof PlasmicRecentRecords__VariantsArgs;
export const PlasmicRecentRecords__VariantProps = new Array<VariantPropType>();

export type PlasmicRecentRecords__ArgsType = {};
type ArgPropType = keyof PlasmicRecentRecords__ArgsType;
export const PlasmicRecentRecords__ArgProps = new Array<ArgPropType>();

export type PlasmicRecentRecords__OverridesType = {
  resultArea?: Flex__<"div">;
};

export interface DefaultRecentRecordsProps {
  className?: string;
}

const $$ = {};

function PlasmicRecentRecords__RenderFunc(props: {
  variants: PlasmicRecentRecords__VariantsArgs;
  args: PlasmicRecentRecords__ArgsType;
  overrides: PlasmicRecentRecords__OverridesType;
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
      data-plasmic-name={"resultArea"}
      data-plasmic-override={overrides.resultArea}
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
        sty.resultArea
      )}
    >
      <ResultBox
        className={classNames("__wab_instance", sty.resultBox___4E76P)}
        lose={
          hasVariant(globalVariants, "desktopBase", "desktopOnly")
            ? ["airdrop"]
            : ["vehicle"]
        }
        win={
          hasVariant(globalVariants, "desktopBase", "desktopOnly")
            ? []
            : undefined
        }
      />

      <ResultBox
        className={classNames("__wab_instance", sty.resultBox__cofFq)}
        lose={
          hasVariant(globalVariants, "desktopBase", "desktopOnly")
            ? []
            : undefined
        }
        win={
          hasVariant(globalVariants, "desktopBase", "desktopOnly")
            ? ["firstAid"]
            : ["airdrop"]
        }
      />

      <ResultBox
        className={classNames("__wab_instance", sty.resultBox__xZ2Du)}
        lose={
          hasVariant(globalVariants, "desktopBase", "desktopOnly")
            ? ["vehicle"]
            : ["firstAid"]
        }
        win={
          hasVariant(globalVariants, "desktopBase", "desktopOnly")
            ? []
            : undefined
        }
      />
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  resultArea: ["resultArea"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  resultArea: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicRecentRecords__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicRecentRecords__VariantsArgs;
    args?: PlasmicRecentRecords__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicRecentRecords__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicRecentRecords__ArgsType,
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
          internalArgPropNames: PlasmicRecentRecords__ArgProps,
          internalVariantPropNames: PlasmicRecentRecords__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicRecentRecords__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "resultArea") {
    func.displayName = "PlasmicRecentRecords";
  } else {
    func.displayName = `PlasmicRecentRecords.${nodeName}`;
  }
  return func;
}

export const PlasmicRecentRecords = Object.assign(
  // Top-level PlasmicRecentRecords renders the root element
  makeNodeComponent("resultArea"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicRecentRecords
    internalVariantProps: PlasmicRecentRecords__VariantProps,
    internalArgProps: PlasmicRecentRecords__ArgProps
  }
);

export default PlasmicRecentRecords;
/* prettier-ignore-end */
