// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ncwW2Qgif2pGwQDF81hXqa
// Component: 0iHTuHTgXBjV

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

import ChannelOptions from "../../ChannelOptions"; // plasmic-import: Xh7VDAcPkzp8/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: ncwW2Qgif2pGwQDF81hXqa/projectcss
import sty from "./PlasmicChannelSelection.module.css"; // plasmic-import: 0iHTuHTgXBjV/css

createPlasmicElementProxy;

export type PlasmicChannelSelection__VariantMembers = {};
export type PlasmicChannelSelection__VariantsArgs = {};
type VariantPropType = keyof PlasmicChannelSelection__VariantsArgs;
export const PlasmicChannelSelection__VariantProps =
  new Array<VariantPropType>();

export type PlasmicChannelSelection__ArgsType = {};
type ArgPropType = keyof PlasmicChannelSelection__ArgsType;
export const PlasmicChannelSelection__ArgProps = new Array<ArgPropType>();

export type PlasmicChannelSelection__OverridesType = {
  root?: Flex__<"div">;
  _2选择货币2?: Flex__<"div">;
  channelSelection?: Flex__<typeof ChannelOptions>;
};

export interface DefaultChannelSelectionProps {
  className?: string;
}

const $$ = {};

function PlasmicChannelSelection__RenderFunc(props: {
  variants: PlasmicChannelSelection__VariantsArgs;
  args: PlasmicChannelSelection__ArgsType;
  overrides: PlasmicChannelSelection__OverridesType;
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
        path: "channelSelection.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
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
        data-plasmic-name={"_2\u9009\u62e9\u8d27\u5e012"}
        data-plasmic-override={overrides._2选择货币2}
        className={classNames(projectcss.all, sty._2选择货币2)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__fskvf
          )}
        >
          <Trans__>{"3. \u9009\u62e9\u901a\u9053"}</Trans__>
        </div>
      </div>
      <ChannelOptions
        data-plasmic-name={"channelSelection"}
        data-plasmic-override={overrides.channelSelection}
        className={classNames("__wab_instance", sty.channelSelection)}
        color={"dark"}
        onChange={(...eventArgs) => {
          generateStateOnChangeProp($state, ["channelSelection", "value"])(
            eventArgs[0]
          );
        }}
        options={(() => {
          const __composite = [
            { value: null, label: null },
            { value: null, label: null },
            { value: null, label: null },
            { value: null, label: null }
          ];
          __composite["0"]["value"] = "BEP20";
          __composite["0"]["label"] = "BEP20";
          __composite["1"]["value"] = "TRC20";
          __composite["1"]["label"] = "TRC20";
          __composite["2"]["value"] = "TON";
          __composite["2"]["label"] = "TON";
          __composite["3"]["value"] = "ERC20";
          __composite["3"]["label"] = "ERC20";
          return __composite;
        })()}
        placeholder={
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__w1PYb
            )}
          >
            <Trans__>{"\u8bf7\u9009\u62e9\u901a\u9053\u2026"}</Trans__>
          </div>
        }
        value={generateStateValueProp($state, ["channelSelection", "value"])}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "_2\u9009\u62e9\u8d27\u5e012", "channelSelection"],
  _2选择货币2: ["_2\u9009\u62e9\u8d27\u5e012"],
  channelSelection: ["channelSelection"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  _2选择货币2: "div";
  channelSelection: typeof ChannelOptions;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicChannelSelection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicChannelSelection__VariantsArgs;
    args?: PlasmicChannelSelection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicChannelSelection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicChannelSelection__ArgsType,
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
          internalArgPropNames: PlasmicChannelSelection__ArgProps,
          internalVariantPropNames: PlasmicChannelSelection__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicChannelSelection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicChannelSelection";
  } else {
    func.displayName = `PlasmicChannelSelection.${nodeName}`;
  }
  return func;
}

export const PlasmicChannelSelection = Object.assign(
  // Top-level PlasmicChannelSelection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    _2选择货币2: makeNodeComponent("_2\u9009\u62e9\u8d27\u5e012"),
    channelSelection: makeNodeComponent("channelSelection"),

    // Metadata about props expected for PlasmicChannelSelection
    internalVariantProps: PlasmicChannelSelection__VariantProps,
    internalArgProps: PlasmicChannelSelection__ArgProps
  }
);

export default PlasmicChannelSelection;
/* prettier-ignore-end */
