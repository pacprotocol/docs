const axios = require("axios");
const fs = require("fs").promises;
const path = require("path");


const exclude_commands = [
    "staking"
]

const disable_format_commands = [
]

axios.post("http://lol:lol@localhost:1111",
    {
        "jsonrpc": "1.0",
        "id": "0",
        "method": "help",
        "params": []
    }
).then(async (response) => {
    const commands = response.data.result.split("\n");

    //Not included in help, hence manually adding this
    commands.push("setstaking");

    const doc_path = path.resolve(__dirname, "../docs/core/developers/pac-protocol-core/client-commands/");

    const files = await fs.readdir(doc_path + "/");

    files.forEach(async (file) => {
        if (file.includes(".mdx")) {
            await fs.unlink(doc_path + "/" + file);
        }
    })

    for (let i = 0; i < commands.length; i++) {
        const command = commands[i];
        
        const command_name = command.split(" ")[0];
        if (command == "" || command[0] == "=" || exclude_commands.includes(command_name)) {
            continue;
        }


        const res = await axios.post("http://lol:lol@localhost:1111",
            {
                "jsonrpc": "1.0",
                "id": "0",
                "method": "help",
                "params": [command_name]
            }
        )

        let mdx_result = ""

        if (!disable_format_commands.includes(command_name)) {
            let result = res.data.result.replace(/</g, "&lt;").replace(/>/g, "&gt;");

            result = result.replace(command + "\n\n", "");

            let description = "";
            if (result.includes("Arguments:")) {
                description = result.substring(0, result.indexOf("Arguments:"));
            } else if (result.includes("Result:")) {
                description = result.substring(0, result.indexOf("Result:"));
            } else if (result.includes("Result ")) {
                description = result.substring(0, result.indexOf("Result "));
            } else if (result.includes("Examples:")) {
                description = result.substring(0, result.indexOf("Examples:"));
            } else if (result.includes("Example:")) {
                description = result.substring(0, result.indexOf("Example:"));
            } else {
                description = result.substring(0, result.indexOf("\n\n"));
            }
            let parameter = null;
            let examples = null;
            let result_example = null;
            let note = null;

            if (description) {
                result = result.replace(description, "");
            }

            if (description.includes("Note:")) {
                description = description.replace("Note:\n", "");
                note = description.substring(description.indexOf("Note:"), description.length).replace("Note:", "");
                description = description.replace(note + "\n", "");
            }

            let param = [];


            if (result.includes("Arguments:")) {

     
                result = result.replace("Arguments:\n", "");
                let param_index = result.indexOf("\n\n");
                if (param_index === -1) {
                    param_index = result.length;
                }
                parameter = result.substring(0, param_index);
                result = result.replace(parameter + "\n\n", "");

                if (command_name === "setnetworkactive") {
                    console.log(parameter, param_index);
                }


                if (parameter[0] === "[" || parameter[0] === "{") {
                    let j_object = parameter;
                    param.push({ arg: j_object, type: null, desc: null, is_object: true })
                } else {
                    let j = 0;
                    param_edit = parameter;
                    while (true) {
                        j++;

                        let stop = false;

                        let p = param_edit;

                        let currentIndex = p.indexOf((j) + ". ");
                        let nextIndex = p.indexOf((j + 1) + ". ");

                        if (nextIndex == -1) {
                            if (p.includes("Result")) {
                                nextIndex = p.indexOf("Result")
                            } else if (p.includes("Examples")) {
                                nextIndex = p.indexOf("Examples")
                            } else {
                                nextIndex = p.length;
                            }
                            stop = true;
                        } else {
                            //nextIndex = 0;
                        }

                        const range = p.substring(currentIndex, nextIndex)
                        param_edit = param_edit.replace(range, "");
                        result = result.replace(range, "").trim();
                        p = range.replace(/[0-9]+. /, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">");

                        let arg = p.substring(0, p.indexOf(" "));
                        let types = p.replace(arg, "");
                        types = types.substring(0, types.indexOf(")") + 1);
                        let desc = p.replace(arg, "").replace(types, "");

                        arg = arg.replace(/\"/g, "").replace(/\s\s+/g, ' ')
                        types = types.replace(/\s\s+/g, '');

                        types = types.replace("(", "").replace(")", "").split(",");

                        //desc = desc.replace(/\s\s+/g, ' ');

                        if (desc[0] === " ") {
                            desc = desc.substring(1, desc.length);
                        }

                        if (
                            desc.includes("[") && desc.includes("]") ||
                            desc.includes("{") && desc.includes("}")
                        ) {
                            let code_snippet = "";

                            if (desc.includes("[") && desc.includes("{")) {
                                if (desc.indexOf("[") < desc.indexOf("{")) {
                                    code_snippet = desc.substring(desc.indexOf("["), desc.lastIndexOf("]") + 1)
                                } else {
                                    code_snippet = desc.substring(desc.indexOf("{"), desc.lastIndexOf("}") + 1)
                                }
                            } else {
                                if (desc.includes("[")) {
                                    code_snippet = desc.substring(desc.indexOf("["), desc.lastIndexOf("]") + 1)
                                } else if (desc.includes("{")) {
                                    code_snippet = desc.substring(desc.indexOf("{"), desc.lastIndexOf("}") + 1)
                                }
                            }
                            desc = desc.replace(code_snippet, "");
                            code_snippet = code_snippet.replace(/ [\n\r\s]+]/gm, "]")
                            code_snippet = code_snippet.replace(/ [\n\r\s]+}/gm, "}")
                            code_snippet = code_snippet.replace(/ [\n\r\s]+}/gm, "}")
                            code_snippet = code_snippet.replace(/      /gm, "    ")
                            desc += "\n\n";
                            desc += "```json\n" + code_snippet + "\n```\n\n";
                        }


                        //if (types.includes("array")) {
                        //    desc += "\n\n";
                        //    desc += "```json\n" + old_param.substring(old_param.indexOf("["), old_param.indexOf("]") + 1) + "\n```\n\n";
                        //    console.log();
                        //}

                        param.push({
                            arg,
                            desc,
                            types,
                        });

                        if (stop) {
                            break;
                        }
                    }
                }
            }



            if (result.includes("Result")) {
                result = result.replace("Result:\n", "");
                let example_index = -1;
                if (result.includes("Example:")) {
                    example_index = result.indexOf("Example:");
                } else {
                    example_index = result.indexOf("Examples:");
                }
                result_example = result.substring(0, example_index - 2);
                result = result.replace(result_example + "\n\n", "");

                if (result_example.substring(0, 4) == "&gt;" || result_example[0] === "{") {
                    result_example = "```json\n" + result_example.replace(/\(/g, "#(") + "\n```";
                } else {
                    result_example = "```bash\n" + result_example.replace(/\(/g, "#(") + "\n```";
                }
            }

            if (result.includes("Examples:")) {
                result = result.replace("Examples:\n", "");
                examples = result.substring(result.indexOf("Examples:"), result.length);
                result = result.replace(examples, "");
                examples = examples.split("\n");
                for (let j = 0; j < examples.length; j++) {
                    if (examples[j].substring(0, 4) == "&gt;") {
                        examples[j] = "```bash\n" + examples[j].replace("&gt; ", "").replace(/&lt;/g, "<").replace(/&gt;/g, ">") + "\n```";
                    }
                }
                examples = examples.join("\n\n");
            }

            if (result.includes("Example:")) {
                result = result.replace("Example:\n", "");
                examples = result.substring(result.indexOf("Example:"), result.length);
                result = result.replace(examples, "");
                examples = examples.split("\n");
                for (let j = 0; j < examples.length; j++) {
                    if (examples[j].substring(0, 4) == "&gt;") {
                        examples[j] = "```bash\n" + examples[j].replace("&gt; ", "").replace(/&lt;/g, "<").replace(/&gt;/g, ">") + "\n```";
                    }
                }
                examples = examples.join("\n\n");
            }

            //console.log("Method", command_name);
            //console.log("Description", description);
            //console.log("Note", note);
            //console.log("Arguments", parameter);
            //console.log("Examples", examples);

      

            mdx_result += "---\n";
            mdx_result += "sidebar_position: " + (i + 1) + "\n";
            mdx_result += "---\n";
            mdx_result += "\n"
            mdx_result += "# " + command_name + "\n"

            mdx_result += "## Command" + "\n";
            mdx_result += "\n```bash\n";
            mdx_result += "pacprotocol-cli " + command;
            mdx_result += "\n```\n";
            mdx_result += "\n";

            mdx_result += description + "\n";
            mdx_result += "\n";

            if (note) {
                mdx_result += ":::info" + "\n";
                mdx_result += "\n";
                mdx_result += note + "\n";
                mdx_result += "\n";
                mdx_result += ":::" + "\n";
                mdx_result += "\n";
            }

            if (param && param.length > 0) {
                mdx_result += "## Arguments" + "\n"
                mdx_result += "\n";
                for (let j = 0; j < param.length; j++) {
                    if (!param[j].is_object) {
                        mdx_result += "### `" + param[j].arg.replace(":", "") + "` " + (param[j].types.includes(" required") ? "<span class='asterisk'>*</span>" : "") + "\n"
                        mdx_result += "*(" + param[j].types.join(",") + ")*\n\n";
                        mdx_result += param[j].desc + "\n";
                        mdx_result += "\n";
                    } else {
                        mdx_result += "```json\n" + param[j].arg + "\n```";
                    }
                }
                mdx_result += "\n";
            }

            if (examples) {
                mdx_result += "## Examples" + "\n";
                mdx_result += examples;
                mdx_result += "\n";
            }


            if (result_example) {
                mdx_result += "## Result" + "\n";
                mdx_result += result_example;
                mdx_result += "\n";
            }
            mdx_result += "\n\n___\n\n"
        } else {
            mdx_result += "---\n";
            mdx_result += "sidebar_position: " + (i + 1) + "\n";
            mdx_result += "---\n";
            mdx_result += "\n"
            mdx_result += "# " + command_name + "\n"
        }


        mdx_result += "Running following help command\n"
        mdx_result += "```bash\n pacprotocol-cli help " + command_name + "\n```\n"
        mdx_result += "Will produce following output:\n"
        mdx_result += "\n";
        mdx_result += "\n```bash\n" + res.data.result + "\n```\n";
        mdx_result += "\n";

        await fs.writeFile(doc_path + "/" + command_name + ".mdx", mdx_result, "utf8");
    }
})