import streamlit as st
import os
from pathlib import Path

# Set page config
st.set_page_config(
    page_title="AI Fluency Framework Explorer",
    page_icon="🇮🇳",
    layout="wide",
    initial_sidebar_state="expanded",
)

# --- Helper Functions ---
def read_markdown_file(markdown_file):
    """Reads and returns the content of a markdown file."""
    try:
        return Path(markdown_file).read_text(encoding='utf-8')
    except FileNotFoundError:
        return f"⚠️ **File not found:** `{markdown_file}`"
    except Exception as e:
        return f"⚠️ **An error occurred:** {e}"

# --- Main App ---
def main():
    """Main function to run the Streamlit app."""
    st.sidebar.title("AI Fluency Framework")
    st.sidebar.markdown("---")

    # Navigation
    page_options = [
        "🏠 Home",
        "🎓 Curriculum",
        "🏛️ Framework Specs",
        "📜 Compliance (CACF)",
        "🧰 Toolkits",
        "📈 Case Studies",
        "📄 The Report",
    ]
    page = st.sidebar.radio("Navigate", page_options)
    st.sidebar.markdown("---")

    # --- Page Content ---
    if page == "🏠 Home":
        st.title("🏠 Welcome to the AI Fluency Framework")
        st.markdown(read_markdown_file("START_HERE.md"), unsafe_allow_html=True)

    # Placeholder for other pages
    elif page == "🎓 Curriculum":
        st.title("🎓 AI Fluency Curriculum (AFL)")
        st.markdown("The curriculum is the pedagogical heart of the project, detailing the learning objectives for each level of AI Fluency.")

        curriculum_files = sorted(Path("curriculum").rglob("afl-*.md"))
        # Create a mapping from a display-friendly name to the file path
        curriculum_map = {
            f"AFL-{i}: {p.stem.replace(f'afl-{i}', '').replace('-', ' ').title()}": p
            for i, p in enumerate(curriculum_files)
        }

        # Sidebar selection
        selected_curriculum_name = st.sidebar.selectbox(
            "Select a Curriculum Level",
            options=list(curriculum_map.keys())
        )

        # Display content
        if selected_curriculum_name:
            file_path = curriculum_map[selected_curriculum_name]
            st.markdown("---")
            st.markdown(read_markdown_file(file_path), unsafe_allow_html=True)

    elif page == "🏛️ Framework Specs":
        st.title("🏛️ Framework Specifications")
        st.markdown("This section provides the high-level overview of the dual AFL (India-specific) and CAFF (global) competency frameworks.")

        spec_files = sorted(Path("framework").rglob("*.md"))
        # Filter out READMEs and other non-spec files
        spec_files = [p for p in spec_files if "README" not in p.name and "integration-matrix" not in p.name]

        spec_map = {p.stem.replace('-', ' ').title(): p for p in spec_files}

        # Sidebar selection
        selected_spec_name = st.sidebar.selectbox(
            "Select a Framework Specification",
            options=list(spec_map.keys())
        )

        # Display content
        if selected_spec_name:
            file_path = spec_map[selected_spec_name]
            st.markdown("---")
            st.markdown(read_markdown_file(file_path), unsafe_allow_html=True)

    elif page == "📜 Compliance (CACF)":
        st.title("📜 Constitutional AI Compliance Framework (CACF)")
        st.markdown("The ethical soul of the project, anchoring AI usage in the principles of the Indian Constitution.")

        st.sidebar.subheader("CACF Documents")

        # Operational Docs
        op_files = sorted(Path("compliance/cacf_compliance").rglob("*.md"))
        op_map = {p.stem.replace('_', ' '): p for p in op_files}
        selected_op_doc = st.sidebar.selectbox("Operational", options=list(op_map.keys()))

        # Foundational Docs
        found_files = sorted(Path("compliance/cacf_foundations").rglob("*.md"))
        found_map = {p.stem.replace('_', ' '): p for p in found_files}
        selected_found_doc = st.sidebar.selectbox("Foundational", options=list(found_map.keys()))

        # Display Logic - a bit more complex to handle two select boxes
        # For simplicity, we can just show one at a time. Let's default to operational.
        # A better UI might use tabs, but this is good for a start.
        # Let's decide which one to show based on which one the user last interacted with.
        # This is tricky in Streamlit's execution model. A simpler way is just to show both sections.

        st.markdown("---")
        st.subheader("Operational Framework")
        st.markdown(read_markdown_file(op_map[selected_op_doc]), unsafe_allow_html=True)

        st.markdown("---")
        st.subheader("Foundational Guides")
        st.markdown(read_markdown_file(found_map[selected_found_doc]), unsafe_allow_html=True)

    elif page == "🧰 Toolkits":
        st.title("🧰 Stakeholder Toolkits")
        st.write("Select a toolkit from the sidebar.")
        # To be implemented
        pass
    elif page == "📈 Case Studies":
        st.title("📈 Case Studies")
        st.write("Select a case study from the sidebar.")
        # To be implemented
        pass
    elif page == "📄 The Report":
        st.title("📄 The Comprehensive Report")
        st.markdown(read_markdown_file("comprehensive.md"), unsafe_allow_html=True)


if __name__ == "__main__":
    main()
