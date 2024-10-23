// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ncwW2Qgif2pGwQDF81hXqa
// Component: OnMFW3Jhk7Lt

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

import { useScreenVariants as useScreenVariants_2BvNreuf1Eto } from "./PlasmicGlobalVariant__DesktopBase"; // plasmic-import: 2BVNreuf1ETO/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: ncwW2Qgif2pGwQDF81hXqa/projectcss
import sty from "./Plasmic_1KButton.module.css"; // plasmic-import: OnMFW3Jhk7Lt/css

import Group12Icon from "./icons/PlasmicIcon__Group12"; // plasmic-import: jCvLnKpMT7Su/icon
import Group13Icon from "./icons/PlasmicIcon__Group13"; // plasmic-import: b_GKDGRdheQB/icon
import group11BaPVzOXc68Y from "./images/group11.svg"; // plasmic-import: ba_pVzOXc68y/picture

createPlasmicElementProxy;

export type Plasmic_1KButton__VariantMembers = {
  chosen: "chosen";
};
export type Plasmic_1KButton__VariantsArgs = {
  chosen?: SingleBooleanChoiceArg<"chosen">;
};
type VariantPropType = keyof Plasmic_1KButton__VariantsArgs;
export const Plasmic_1KButton__VariantProps = new Array<VariantPropType>(
  "chosen"
);

export type Plasmic_1KButton__ArgsType = {};
type ArgPropType = keyof Plasmic_1KButton__ArgsType;
export const Plasmic_1KButton__ArgProps = new Array<ArgPropType>();

export type Plasmic_1KButton__OverridesType = {
  _01KButtonDesktop?: Flex__<"div">;
  freeBox?: Flex__<"div">;
  diamond11?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
  _108?: Flex__<"div">;
  text?: Flex__<"div">;
};

export interface Default_1KButtonProps {
  chosen?: SingleBooleanChoiceArg<"chosen">;
  className?: string;
}

const $$ = {};

function Plasmic_1KButton__RenderFunc(props: {
  variants: Plasmic_1KButton__VariantsArgs;
  args: Plasmic_1KButton__ArgsType;
  overrides: Plasmic_1KButton__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "chosen",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.chosen
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    desktopBase: useScreenVariants_2BvNreuf1Eto()
  });

  return (
    <div
      data-plasmic-name={"_01KButtonDesktop"}
      data-plasmic-override={overrides._01KButtonDesktop}
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
        sty._01KButtonDesktop
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxchosen]: hasVariant($state, "chosen", "chosen")
        })}
      >
        <div
          data-plasmic-name={"diamond11"}
          data-plasmic-override={overrides.diamond11}
          className={classNames(projectcss.all, sty.diamond11)}
        >
          <PlasmicImg__
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={
              hasVariant(globalVariants, "desktopBase", "desktopOnly")
                ? "16px"
                : "8.342px"
            }
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={
              hasVariant(globalVariants, "desktopBase", "desktopOnly")
                ? "16px"
                : "10px"
            }
            loading={"lazy"}
            src={{
              src: group11BaPVzOXc68Y,
              fullWidth: 10,
              fullHeight: 8.342,
              aspectRatio: 1.111111
            }}
          />

          <Group12Icon
            className={classNames(projectcss.all, sty.svg__jPeOv)}
            role={"img"}
          />

          <Group12Icon
            className={classNames(projectcss.all, sty.svg__zUzY)}
            role={"img"}
          />

          <Group13Icon
            className={classNames(projectcss.all, sty.svg__o32DX)}
            role={"img"}
          />
        </div>
        <div
          data-plasmic-name={"_108"}
          data-plasmic-override={overrides._108}
          className={classNames(projectcss.all, sty._108)}
        >
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text,
              { [sty.textchosen]: hasVariant($state, "chosen", "chosen") }
            )}
          >
            <Trans__>{"1,000"}</Trans__>
          </div>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  _01KButtonDesktop: [
    "_01KButtonDesktop",
    "freeBox",
    "diamond11",
    "img",
    "_108",
    "text"
  ],
  freeBox: ["freeBox", "diamond11", "img", "_108", "text"],
  diamond11: ["diamond11", "img"],
  img: ["img"],
  _108: ["_108", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  _01KButtonDesktop: "div";
  freeBox: "div";
  diamond11: "div";
  img: typeof PlasmicImg__;
  _108: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  Plasmic_1KButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: Plasmic_1KButton__VariantsArgs;
    args?: Plasmic_1KButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<Plasmic_1KButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      Plasmic_1KButton__ArgsType,
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
          internalArgPropNames: Plasmic_1KButton__ArgProps,
          internalVariantPropNames: Plasmic_1KButton__VariantProps
        }),
      [props, nodeName]
    );
    return Plasmic_1KButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "_01KButtonDesktop") {
    func.displayName = "Plasmic_1KButton";
  } else {
    func.displayName = `Plasmic_1KButton.${nodeName}`;
  }
  return func;
}

export const Plasmic_1KButton = Object.assign(
  // Top-level Plasmic_1KButton renders the root element
  makeNodeComponent("_01KButtonDesktop"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    diamond11: makeNodeComponent("diamond11"),
    img: makeNodeComponent("img"),
    _108: makeNodeComponent("_108"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for Plasmic_1KButton
    internalVariantProps: Plasmic_1KButton__VariantProps,
    internalArgProps: Plasmic_1KButton__ArgProps
  }
);

export default Plasmic_1KButton;
/* prettier-ignore-end */
