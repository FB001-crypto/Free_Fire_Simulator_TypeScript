// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ncwW2Qgif2pGwQDF81hXqa
// Component: kD3fRv5nUYyl

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: ncwW2Qgif2pGwQDF81hXqa/projectcss
import sty from "./PlasmicProfileEntrance.module.css"; // plasmic-import: kD3fRv5nUYyl/css

import Layer2Icon from "./icons/PlasmicIcon__Layer2"; // plasmic-import: oV9dA2w2mJ_S/icon

createPlasmicElementProxy;

export type PlasmicProfileEntrance__VariantMembers = {};
export type PlasmicProfileEntrance__VariantsArgs = {};
type VariantPropType = keyof PlasmicProfileEntrance__VariantsArgs;
export const PlasmicProfileEntrance__VariantProps =
  new Array<VariantPropType>();

export type PlasmicProfileEntrance__ArgsType = {};
type ArgPropType = keyof PlasmicProfileEntrance__ArgsType;
export const PlasmicProfileEntrance__ArgProps = new Array<ArgPropType>();

export type PlasmicProfileEntrance__OverridesType = {
  profile?: Flex__<"div">;
  profileBackground?: Flex__<"div">;
  profileIcon?: Flex__<"div">;
  svg?: Flex__<"svg">;
};

export interface DefaultProfileEntranceProps {
  className?: string;
}

const $$ = {};

function PlasmicProfileEntrance__RenderFunc(props: {
  variants: PlasmicProfileEntrance__VariantsArgs;
  args: PlasmicProfileEntrance__ArgsType;
  overrides: PlasmicProfileEntrance__OverridesType;
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

  return (
    <div
      data-plasmic-name={"profile"}
      data-plasmic-override={overrides.profile}
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
        sty.profile
      )}
      onClick={async event => {
        const $steps = {};

        $steps["profileModal"] = true
          ? (() => {
              const actionArgs = { operation: 0 };
              return (({ variable, value, startIndex, deleteCount }) => {
                if (!variable) {
                  return;
                }
                const { objRoot, variablePath } = variable;

                $stateSet(objRoot, variablePath, value);
                return value;
              })?.apply(null, [actionArgs]);
            })()
          : undefined;
        if (
          $steps["profileModal"] != null &&
          typeof $steps["profileModal"] === "object" &&
          typeof $steps["profileModal"].then === "function"
        ) {
          $steps["profileModal"] = await $steps["profileModal"];
        }
      }}
    >
      <div
        data-plasmic-name={"profileBackground"}
        data-plasmic-override={overrides.profileBackground}
        className={classNames(projectcss.all, sty.profileBackground)}
      />

      <div
        data-plasmic-name={"profileIcon"}
        data-plasmic-override={overrides.profileIcon}
        className={classNames(projectcss.all, sty.profileIcon)}
      >
        <Layer2Icon
          data-plasmic-name={"svg"}
          data-plasmic-override={overrides.svg}
          className={classNames(projectcss.all, sty.svg)}
          role={"img"}
        />
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  profile: ["profile", "profileBackground", "profileIcon", "svg"],
  profileBackground: ["profileBackground"],
  profileIcon: ["profileIcon", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  profile: "div";
  profileBackground: "div";
  profileIcon: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProfileEntrance__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProfileEntrance__VariantsArgs;
    args?: PlasmicProfileEntrance__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProfileEntrance__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicProfileEntrance__ArgsType,
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
          internalArgPropNames: PlasmicProfileEntrance__ArgProps,
          internalVariantPropNames: PlasmicProfileEntrance__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicProfileEntrance__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "profile") {
    func.displayName = "PlasmicProfileEntrance";
  } else {
    func.displayName = `PlasmicProfileEntrance.${nodeName}`;
  }
  return func;
}

export const PlasmicProfileEntrance = Object.assign(
  // Top-level PlasmicProfileEntrance renders the root element
  makeNodeComponent("profile"),
  {
    // Helper components rendering sub-elements
    profileBackground: makeNodeComponent("profileBackground"),
    profileIcon: makeNodeComponent("profileIcon"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicProfileEntrance
    internalVariantProps: PlasmicProfileEntrance__VariantProps,
    internalArgProps: PlasmicProfileEntrance__ArgProps
  }
);

export default PlasmicProfileEntrance;
/* prettier-ignore-end */
