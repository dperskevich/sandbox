import HtmlWebpackPlugin from "html-webpack-plugin";
import { ProgressPlugin, WebpackPluginInstance } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BuildOptions } from "./types/config";

export function BuildPlugins({ paths }: BuildOptions): WebpackPluginInstance[] {
    return [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash].css",
        }),
        new ProgressPlugin()
    ];
}