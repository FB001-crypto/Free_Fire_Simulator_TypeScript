// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ncwW2Qgif2pGwQDF81hXqa
// Component: wvxmlV4jcUs7

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
import sty from "./PlasmicOtherToolsDesktop.module.css"; // plasmic-import: wvxmlV4jcUs7/css

import InformationButton2SvgIcon from "./icons/PlasmicIcon__InformationButton2Svg"; // plasmic-import: 65cHQAE_Nv_9/icon
import Group15Icon from "./icons/PlasmicIcon__Group15"; // plasmic-import: ts6mMTNCD9pR/icon
import QuestionSvg2Icon from "./icons/PlasmicIcon__QuestionSvg2"; // plasmic-import: RM9CGCqJxNIC/icon
import questionMarkTOoDr9WcYqn2 from "./images/questionMark.svg"; // plasmic-import: TOoDr9wcYqn2/picture
import question2Svg8OnHi9BV4IWi from "./images/question2Svg.svg"; // plasmic-import: 8OnHI9bV4IWi/picture

createPlasmicElementProxy;

export type PlasmicOtherToolsDesktop__VariantMembers = {};
export type PlasmicOtherToolsDesktop__VariantsArgs = {};
type VariantPropType = keyof PlasmicOtherToolsDesktop__VariantsArgs;
export const PlasmicOtherToolsDesktop__VariantProps =
  new Array<VariantPropType>();

export type PlasmicOtherToolsDesktop__ArgsType = {};
type ArgPropType = keyof PlasmicOtherToolsDesktop__ArgsType;
export const PlasmicOtherToolsDesktop__ArgProps = new Array<ArgPropType>();

export type PlasmicOtherToolsDesktop__OverridesType = {
  root?: Flex__<"div">;
  gameInfo?: Flex__<"div">;
  settings?: Flex__<"div">;
  question?: Flex__<"div">;
  img?: Flex__<typeof PlasmicImg__>;
};

export interface DefaultOtherToolsDesktopProps {
  className?: string;
}

const $$ = {};

function PlasmicOtherToolsDesktop__RenderFunc(props: {
  variants: PlasmicOtherToolsDesktop__VariantsArgs;
  args: PlasmicOtherToolsDesktop__ArgsType;
  overrides: PlasmicOtherToolsDesktop__OverridesType;
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
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
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
        sty.root
      )}
    >
      <div
        data-plasmic-name={"gameInfo"}
        data-plasmic-override={overrides.gameInfo}
        className={classNames(projectcss.all, sty.gameInfo)}
      >
        <InformationButton2SvgIcon
          className={classNames(projectcss.all, sty.svg__p1DYh)}
          role={"img"}
        />
      </div>
      <div
        data-plasmic-name={"settings"}
        data-plasmic-override={overrides.settings}
        className={classNames(projectcss.all, sty.settings)}
      >
        <Group15Icon
          className={classNames(projectcss.all, sty.svg__lIrd)}
          role={"img"}
        />
      </div>
      <div
        data-plasmic-name={"question"}
        data-plasmic-override={overrides.question}
        className={classNames(projectcss.all, sty.question)}
      >
        <PlasmicIcon__
          PlasmicIconType={
            hasVariant(globalVariants, "desktopBase", "desktopOnly")
              ? QuestionSvg2Icon
              : Group15Icon
          }
          className={classNames(projectcss.all, sty.svg__bIegw)}
          role={"img"}
        />
      </div>
      <PlasmicImg__
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img)}
        displayHeight={
          hasVariant(globalVariants, "desktopBase", "desktopOnly")
            ? "24px"
            : "18px"
        }
        displayMaxHeight={"none"}
        displayMaxWidth={"100%"}
        displayMinHeight={"0"}
        displayMinWidth={"0"}
        displayWidth={
          hasVariant(globalVariants, "desktopBase", "desktopOnly")
            ? "24px"
            : "18px"
        }
        loading={"lazy"}
        src={
          hasVariant(globalVariants, "desktopBase", "desktopOnly")
            ? {
                src: question2Svg8OnHi9BV4IWi,
                fullWidth: 512,
                fullHeight: 512,
                aspectRatio: 1
              }
            : {
                src: questionMarkTOoDr9WcYqn2,
                fullWidth: 18,
                fullHeight: 18,
                aspectRatio: 1
              }
        }
      />
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "gameInfo", "settings", "question", "img"],
  gameInfo: ["gameInfo"],
  settings: ["settings"],
  question: ["question"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  gameInfo: "div";
  settings: "div";
  question: "div";
  img: typeof PlasmicImg__;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicOtherToolsDesktop__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicOtherToolsDesktop__VariantsArgs;
    args?: PlasmicOtherToolsDesktop__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicOtherToolsDesktop__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicOtherToolsDesktop__ArgsType,
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
          internalArgPropNames: PlasmicOtherToolsDesktop__ArgProps,
          internalVariantPropNames: PlasmicOtherToolsDesktop__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicOtherToolsDesktop__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicOtherToolsDesktop";
  } else {
    func.displayName = `PlasmicOtherToolsDesktop.${nodeName}`;
  }
  return func;
}

export const PlasmicOtherToolsDesktop = Object.assign(
  // Top-level PlasmicOtherToolsDesktop renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    gameInfo: makeNodeComponent("gameInfo"),
    settings: makeNodeComponent("settings"),
    question: makeNodeComponent("question"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicOtherToolsDesktop
    internalVariantProps: PlasmicOtherToolsDesktop__VariantProps,
    internalArgProps: PlasmicOtherToolsDesktop__ArgProps
  }
);

export default PlasmicOtherToolsDesktop;
/* prettier-ignore-end */